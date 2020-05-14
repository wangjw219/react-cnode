import React from 'react';
import './QuestionList.css';

export default function QuestionList(props) {
    const {list} = props;
    return (
        <ul className="question-list">
            {
                list.map(item => {
                    return (
                        <div className="question-item" key={item.id}>
                            <img src={item.avatar} className="avatar" />
                            <p className="title">{item.title}</p>
                            <p className="time">{item.time}</p>
                        </div>
                    )
                })
            }
        </ul>
    );
}