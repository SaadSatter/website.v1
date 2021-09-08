import React from 'react'
import {Link} from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>
                Epic Strategic Gameplay!!
            </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul>
                    <CardItem/>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
