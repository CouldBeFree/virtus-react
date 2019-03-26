import React, { Component } from 'react'

class  WhoIsOnlineList extends Component {
    renderUsers() {
        return (
            <ul>
                {this.props.users.map((user, index) => {
                    if (user.id === this.props.currentUser.id) {
                        return (
                            < WhoIsOnlineListItem key={index} presenceState="online">
                                {user.name} (You)
                            </ WhoIsOnlineListItem>
                        )
                    }
                    return (
                        < WhoIsOnlineListItem key={index} presenceState={user.presence.state}>
                            {user.name}
                        </ WhoIsOnlineListItem>
                    )
                })}
            </ul>
        )
    }

    render() {
        if (this.props.users) {
            return this.renderUsers()
        } else {
            return <p>Loading...</p>
        }
    }
}

class  WhoIsOnlineListItem extends Component {
    render() {
        return (
            <li className="d-flex align-items-center online-item">
                <div className="status-item"
                    style={{
                        backgroundColor:
                            this.props.presenceState === 'online' ? '#539eff' : '#414756',
                    }}
                />
                {this.props.children}
            </li>
        )
    }
}

export default  WhoIsOnlineList;