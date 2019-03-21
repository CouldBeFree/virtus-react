import React, { Component }  from 'react';
import Card from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import TopBar from './TopBar';
const update = require('immutability-helper');

class Projects extends Component {
    state = {
        cards: [
            {
                id: 1,
                project: 'New Website',
                company: 'Microsoft',
                value: 2300,
                deadline: '15 May 2019',
                progress: 70,
                status: 'Development',
                name: 'Dominic Lynton',
                position: 'Front End Dev',
                timeSpent: 40
            },
            {
                id: 2,
                project: 'Landing page',
                company: 'Google',
                value: 1250,
                deadline: '21 May 2019',
                timeSpent: 7,
                progress: 15,
                status: 'Planning',
                name: 'Lyan Roach',
                position: 'UX/UI Designer'
            },
            {
                id: 3,
                project: 'New dashboard',
                company: 'Google',
                value: 5100,
                deadline: '21 May 2019',
                timeSpent: 56,
                progress: 90,
                status: 'Testing',
                name: 'Michelle Stewart',
                position: 'Account'
            },
            {
                id: 4,
                project: 'New logo',
                company: 'JCD.pl',
                value: 900,
                deadline: '15 june 2019',
                timeSpent: 10,
                progress: 40,
                status: 'Design',
                name: 'Lyan Roach',
                position: 'UX/UI Designer'
            },
            {
                id: 5,
                project: 'Landing page',
                company: 'Symu.co',
                value: 1500,
                deadline: '8 August 2019',
                timeSpent: 0,
                progress: 40,
                status: 'Quened',
                name: 'Michelle Stewart',
                position: 'Account'
            },
            {
                id: 6,
                project: 'Mobile app',
                company: 'Facebook',
                value: 4300,
                deadline: '5th May 2019',
                timeSpent: 59,
                progress: 100,
                status: 'Completed',
                name: 'Michelle Stewart',
                position: 'Account'
            },
            {
                id: 7,
                project: 'Wordpress theme',
                company: 'Themeforest',
                value: 1300,
                deadline: '2th May 2016',
                timeSpent: 30,
                progress: 100,
                status: 'Completed',
                name: 'Michelle Stewart',
                position: 'Account'
            },
        ],
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

    render() {
        const { cards } = this.state;
        let cardLength = cards.length;
        return (
            <div className="projects-wrap">
                <TopBar
                    projects={cardLength}
                />
                <div className="projects__item">
                    <div className="card-container">
                        {cards.map((card, i) => (
                            <Card
                                key={card.id}
                                index={i}
                                id={card.id}
                                text={card.text}
                                moveCard={this.moveCard}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Projects);