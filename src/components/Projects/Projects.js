import React, { Component }  from 'react';
import Card from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import TopBar from './TopBar';
import { connect } from 'react-redux';
const update = require('immutability-helper');

class Projects extends Component {
    state = {
        cards: [],
        dropdownOpen: false
    };

    componentDidMount(){
        const { card } = this.props;
        this.setState({
            cards: card
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    moveCard = (dragIndex, hoverIndex) => {
        const { cards } = this.state;
        const dragCard = cards[dragIndex];

        this.setState(
            update(this.state, {
                cards: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            }),
        )
    };

    selectItem = event => {
        const { card } = this.props;
        const selected = event.target.value;
        let filtered;
        if(selected === 'All') {
            filtered = card;
        } else {
            filtered = card.filter((item) => {
                return item.company === selected
            });
        }
        this.setState({
            cards: filtered
        })
    };

    render() {
        const { cards, dropdownOpen } = this.state;
        let cardLength = cards.length;
        return (
            <div className="projects-wrap">
                <TopBar
                    projects={cardLength}
                    isOpen={dropdownOpen}
                    toggle={this.toggle}
                    company={cards}
                    select={this.selectItem}
                />
                <div className="projects__item">
                    <div className="card-container">
                        <div className="card-head">
                            <ul className="d-flex justify-content-between">
                                <li className="title">Project title</li>
                                <li className="value">Value</li>
                                <li className="deadline">Deadline</li>
                                <li className="time-spent">Time spent</li>
                                <li className="progress-value">Progress</li>
                                <li className="status">Status</li>
                                <li className="assigned">Assigned to</li>
                            </ul>
                        </div>
                        {cards.map((card, i) => (
                            <Card
                                key={card.id}
                                index={i}
                                id={card.id}
                                project={card.project}
                                company={card.company}
                                value={card.value}
                                deadline={card.deadline}
                                time={card.timeSpent}
                                progress={card.progress}
                                status={card.status}
                                name={card.name}
                                position={card.position}
                                moveCard={this.moveCard}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        card: state.card
    }
};

Projects = DragDropContext(HTML5Backend)(Projects);
export default connect(mapStateToProps, {})(Projects);