import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import { Progress } from 'reactstrap';

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    },
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index

        if (dragIndex === hoverIndex) {
            return;
        }

        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect();

        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        const clientOffset = monitor.getClientOffset();

        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        props.moveCard(dragIndex, hoverIndex);

        monitor.getItem().index = hoverIndex;
    },
};

class Card extends Component {
    render() {
        const {
            project,
            company,
            value,
            deadline,
            time,
            progress,
            status,
            name,
            position,
            isDragging,
            connectDragSource,
            connectDropTarget,
        } = this.props;
        const opacity = isDragging ? 0 : 1;
        const cardStyle = {
            borderLeft: `4px solid ${ progress === 0 ? '#ffffff' : progress < 100 ? '#007BFF' : '#28A745' }`
        };

        return (
            connectDragSource &&
            connectDropTarget &&
            connectDragSource(
                connectDropTarget(<div className="d-flex justify-content-between align-items-center card-item" style={{...cardStyle, opacity }}>
                    <p className="title">
                        <span className="project">{project}</span>
                        <span className="sub-item">{company}</span>
                    </p>
                    <p className="value">${value}</p>
                    <p className="deadline">{deadline}</p>
                    <p className="time-spent">{time} hours</p>
                    <div className="progress-value justify-content-between d-flex align-items-center">
                        <span>% {progress}</span>
                        <Progress color={progress === 0 ? '#ffffff' : progress < 100 ? 'primary' : 'success'} value={progress} />
                    </div>
                    <p className="status">{status}</p>
                    <p className="assigned">
                        <span className="name">{name}</span>
                        <span className="sub-item">{position}</span>
                    </p>
                </div>),
            )
        );
    }
}

export default flow(
    DragSource(
        'card',
        cardSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    ),
    DropTarget('card', cardTarget, (connect) => ({
        connectDropTarget: connect.dropTarget(),
    }))
)(Card);