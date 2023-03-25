import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Card(props) {
    return (
        <div className="card">
            <div className='photo'>
                <img src='./images/japan.jpeg'></img>
            </div>
            <div className='text'>
                <div className='country'>
                    <img></img>
                    {props.item.location}
                    <a href="/">View on Google Maps</a>
                </div>
                <div className='location'>{props.item.title}</div>
                <div className='date'>
                    <span className='start-date'>{props.item.startDate} - </span>
                    <span className='end-date'>{props.item.endDate}</span>
                </div>
                <div className='content'>{props.item.description}</div>
            </div>
        </div>
    )
}