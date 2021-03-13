import React from 'react';
import NameList from '../name-entries/NameList.js';
import './nameForm.css';

class NameForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            textArea: "",
            nameBadges: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            textArea: this.state.textArea
        }
        this.setState({ 
            nameBadges : [ newBadge, ...this.state.nameBadges ], 
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            textArea: ""
        })
    }

    render() {
        return (
            <div id ="root">
               
                    <form className="wrapper" id="badgeArea" onSubmit={this.handleSubmit}>
                        <input
                            className="input-left"
                            type="text"
                            name="firstName"
                            value={this.state.firstName} 
                            placeholder="First Name" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <input
                            className="input-right"
                            type="text"
                            name="lastName"
                            value={this.state.lastName} 
                            placeholder="Last Name" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <input
                            className="input-left"
                            type="email"
                            name="email"
                            value={this.state.email} 
                            placeholder="Email" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <input
                            className="input-right"
                            type="text"
                            name="placeOfBirth"
                            value={this.state.placeOfBirth} 
                            placeholder="Place Of Birth" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <input
                            className="input-left"
                            type="tel"
                            name="phone"
                            value={this.state.phone} 
                            placeholder="Phone"
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <input
                            className="input-right"
                            type="text"
                            name="favoriteFood"
                            value={this.state.favoriteFood} 
                            placeholder="Favorite Food" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <div className="text-area">
                            <textarea
                                className="text-box"
                                form="badgeArea"
                                name="textArea"
                                placeholder="Tell us about yourself!"
                                value={this.state.textArea}
                                rows="10"
                                cols="100"
                                onChange={this.handleChange}
                                minLength="3"
                                required={true}
                            />
                            <button className="submit-button">Submit</button>
                        </div>
                      
                    </form>
                    <NameList
                    nameBadges={this.state.nameBadges}     
                />
                
            </div>
        );
    }
}

export default NameForm;