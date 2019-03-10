import React from 'react';

const Inbox = ({inbox}) => (
    <div className="inbox">
        <div className="inbox__top text-center">
            <p>Inbox</p>
        </div>
        { inbox.map((item) => {
            return (
                <div className="box" key={item.id}>
                    <div className="box__top d-flex justify-content-between">
                        <p className="name">{item.name}</p>
                        <p className="time">{item.time}</p>
                    </div>
                    <div className="content">
                        <p>{item.content}</p>
                    </div>
                </div>
            )
        }) }
    </div>
)

export default Inbox;