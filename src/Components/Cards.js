import React from 'react'
import {Link} from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';
import picture from '../images/BackCard.JPG';
import picture2 from '../images/ConceptCard2.PNG';

function Cards() {
    return (
        <div className="cards">
            <h1>
                Race to the EndersGate!!
            </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className = 'cards__items'>
                    <CardItem 
                    // better to import the pictures on top and send them through
                    src={picture}
                    cardNum = ''
                    text="Reach the EndersGate and Save Your Kingdom"
                    label='Concept Art'
                    path=''
                    />
                    <div className = 'about__container'>
                        <h2>
                        On earth, all continents were physically connected as one, on Mars skies were 
                        blue and oceans filled to the brim with water, Mercury although hot, remained 
                        host to creatures and species that adapted to it's conditions, Jupiter's moons 
                        were were bountiful with lifeforms of all shapes and sizes roaming about. Their 
                        worlds were reminiscent to that of our current, being culturally diverse with a 
                        thirst for knowledge and power. The population of each civilization was a mere 
                        fraction of our current day figures which allowed their worlds filled with 
                        natural resources and possibilities to go untouched for long periods of time. 
                        The Pre-curse(r) era was a peaceful era, and with no conflict the lifeforms 
                        grew restless but ready for conflict. But that time would be short lived for 
                        there was a tradition that occurred every 100 years called the Cosmic Eclipse. 
                        Similar to a Solar eclipse as we know today, it blanketed all the planets in 
                        total darkness for a short while. However, unlike our weakened solar eclipse 
                        today, that darkness was different. Thunder and lightning crossed the skies, 
                        oceans seemingly rose from the seas into the skies suspended above, exposing 
                        all the resources available for the taking, volcanoes erupted with power enough 
                        to fuel 20 cities for many years, earth quakes magnitudes greater than the most 
                        devastating events of our history rumbled across the land. And finally, like 
                        clock work, war horns blew from the heavens creating a ominous unforgettable 
                        rallying call bringing an end to all the preceding chaos that ravaged the land. 
                        The Rallying call from above also signified the end of the Great Eclipse which 
                        and as the sun begun the shine as it did before, The Gates, every single one of 
                        them across all the planets, would open simultaneously. As each gate opened, it 
                        revealed light as bright as the sun.
                        </h2>
                    </div>
                    <CardItem
                    cardNum = '2'
                    src={picture2}
                    path=''
                    label='Concept Art'
                    />
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
