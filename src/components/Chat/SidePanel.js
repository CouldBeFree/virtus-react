import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentChannel, setPrivateChannel } from "../../actions";
import firebase from "../../firebase";

class SidePanel extends Component {
    state = {
        users: [],
        user: this.props.user.currentUser,
        usersRef: firebase.database().ref("users"),
        connectedRef: firebase.database().ref(".info/connected"),
        presenceRef: firebase.database().ref("presence")
    };

    componentWillUnmount() {
        this.removeListeners();
    }

    componentDidMount() {
        if (this.state.user) {
            this.addListeners(this.state.user.uid);
        }
    }

    removeListeners = () => {
        this.state.usersRef.off();
        this.state.presenceRef.off();
        this.state.connectedRef.off();
    };

    addListeners = currentUserUid => {
        let loadedUsers = [];
        this.state.usersRef.on("child_added", snap => {
            if (currentUserUid !== snap.key) {
                let user = snap.val();
                user["uid"] = snap.key;
                user["status"] = "offline";
                loadedUsers.push(user);
                this.setState({ users: loadedUsers });
            }
        });

        this.state.connectedRef.on("value", snap => {
            if (snap.val() === true) {
                const ref = this.state.presenceRef.child(currentUserUid);
                ref.set(true);
                ref.onDisconnect().remove(err => {
                    if (err !== null) {
                        console.error(err);
                    }
                });
            }
        });

        this.state.presenceRef.on("child_added", snap => {
            if (currentUserUid !== snap.key) {
                this.addStatusToUser(snap.key);
            }
        });

        this.state.presenceRef.on("child_removed", snap => {
            if (currentUserUid !== snap.key) {
                this.addStatusToUser(snap.key, false);
            }
        });
    };

    getChannelId = userId => {
        const currentUserId = this.state.user.uid;
        return userId < currentUserId
            ? `${userId}/${currentUserId}`
            : `${currentUserId}/${userId}`;
    };

    setActiveChannel = userId => {
        this.setState({ activeChannel: userId });
    };

    addStatusToUser = (userId, connected = true) => {
        const updatedUsers = this.state.users.reduce((acc, user) => {
            if (user.uid === userId) {
                user["status"] = `${connected ? "online" : "offline"}`;
            }
            return acc.concat(user);
        }, []);
        this.setState({ users: updatedUsers });
    };

    changeChannel = user => {
        const channelId = this.getChannelId(user.uid);
        const channelData = {
            id: channelId,
            name: user.name
        };
        this.props.setCurrentChannel(channelData);
        this.props.setPrivateChannel(true);
        this.setActiveChannel(user.uid);
    };

    isUserOnline = user => user.status === "online";

    render() {
        const { users, activeChannel } = this.state;
        return (
            <div>
                <div className="text-white">
                    Users { users.length }
                    <ul className="users-list">
                        {users.map( (user) => {
                            return (
                                <li key={user.uid}
                                    style={{ opacity: 0.7, fontStyle: "italic" }}
                                  /*  active={user.uid === activeChannel}*/
                                    onClick={() => this.changeChannel(user)}
                                >
                                    <span className="status" style={{backgroundColor: `${this.isUserOnline(user) ? "green" : "red"}`}}></span>
                                    <span className="name">@ {user.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps,  { setCurrentChannel, setPrivateChannel })(SidePanel)