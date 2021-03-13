

import React from 'react';

const NameCard = ({firstName,lastName}) => {

    return (
        <div>
            <li>
            {firstName} {lastName}
            </li>
        </div>
    );
}

export default NameCard;