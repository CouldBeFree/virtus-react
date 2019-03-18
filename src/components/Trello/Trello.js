import React, { Component } from 'react';
import Board from 'react-trello';

class Trello extends Component {
    state = {
        data : {
            lanes: [
                {
                    id: 'lane1',
                    title: 'Planned Tasks',
                    label: '2/2',
                    cards: [
                        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', cardDraggable: true},
                        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}, cardDraggable: true}
                    ]
                },
                {
                    id: 'lane2',
                    title: 'Completed',
                    label: '0/0',
                    cards: []
                }
            ]
        }
    };
    render () {
        return (
            <div>
                <h1>I am the Trello component</h1>
                <Board data={this.state.data} draggable />
            </div>
        )
    }
}

export default Trello;