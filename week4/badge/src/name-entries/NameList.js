import React, { Component } from 'react';
import NameCard from './NameCard';
import '../App.css';

class NameList extends Component {

    render() {
        const mappedBadges = this.props.nameBadges.map( badge => {
            return (
                <NameCard 
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    email={badge.email}
                    placeOfBirth={badge.placeOfBirth}
                    phone={badge.phone}
                    favoriteFood={badge.favoriteFood}
                    textArea={badge.textArea}
                />
            );
        })
            return (
                <div>
                    {mappedBadges}
                </div>
            );
        }
    }
    

export default NameList;