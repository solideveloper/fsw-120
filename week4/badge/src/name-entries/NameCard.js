

import React from 'react';

const NameCard = ({ firstName, lastName, email, placeOfBirth, phone, favoriteFood, textArea }) => {

    return (
        <div>
            <h1 className="badge-title">Badge:</h1>
            <div className="container">
                <p className="badge-text">Name: {firstName} {lastName}</p>
                <p className="badge-text">Phone: {phone}</p>
                <p className="badge-text">Place of birth: {placeOfBirth}</p>
                <p className="badge-text">Favorite food: {favoriteFood}</p>
                <p className="badge-text">Email: {email}</p>
                <p></p>
                <p className="box">{textArea}</p>
            </div>
        </div>
    );
}

export default NameCard;