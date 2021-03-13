import React from 'react';
import NameList from '../name-entries/NameList.js';
import './nameForm.css';

class NameForm extends React.Component {
constructor() {
    super()
    this.state = {
        firstName: "", 
        lastName: "",
        allNames: []
    }
}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value})
}

handleSubmit = (e) => {
    e.preventDefault()
    let newName = {
        firstName: this.state.firstName,
        lastName: this.state.lastName
    }
    this.setState({ 
        allNames : [ newName, ...this.state.allNames ], 
        firstName: "", lastName: ""
    })
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
            
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                    <button className="submit-button">Submit</button>
                    <NameList
                    allNames={this.state.allNames}     
                />
                </form>
                
            </div>
        );
    }
}

export default NameForm;