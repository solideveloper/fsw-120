import React from 'react';

class Die extends React.Component {
    render() {
        return (
            <h1 className="dice">{this.props.num}</h1>
        )
    }
}

export default Die;
