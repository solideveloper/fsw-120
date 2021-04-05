import React, { Component } from 'react';
import './editTweet.css';


class EditTweet extends Component {
    constructor() {
        super()
        this.state={
            userName: "",
            tag: "",
            textArea: ""
        }
    }
        
    handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value })
    }

    render() {
        return(
            <form className="edit-tweets" >
                <input
                    className="edit-input"
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    placeholder="Username"
                    required={true}
                    onChange={this.handleChange}
                />
                <input
                    className="edit-input"
                    type="text"
                    name="atname"
                    value={this.state.tag}
                    placeholder="@TagName"
                    required={true}
                    onChange={this.handleChange}
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    this.props.handleEdit(this.props.i, this.state)
                    this.setState( prevState => ({
                        userName: "",
                        tag: "",
                        textArea: ""
                    }))
                    }}className="submit-edit"> Submit Edit
                </button>
                <textarea
                    className="edit-box"
                    form="tweetArea"
                    name="textArea"
                    placeholder="What's Happening?"
                    value={this.state.textArea}
                    rows="4"
                    cols="54"
                    onChange={this.handleChange}
                    minLength="3"
                    required={true}
                />
            </form>
        )
    }
}

export default EditTweet;