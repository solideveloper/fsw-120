import React from 'react';
import data from '../data/data.json'
import SuperHero from "../superHero/SuperHero"

class HeroList extends React.Component {
    constructor() {
        super()
        this.state = {
            heroes: data
        }
    }

    render () {
        
        const heroList = this.state.heroes.map(item => <SuperHero key={item.id} item={item} handleClick={() => { return (alert(item.catchPhrase))}}/>)

        return (
            <div>
            {heroList}
            </div>
        )
    }
}

export default HeroList