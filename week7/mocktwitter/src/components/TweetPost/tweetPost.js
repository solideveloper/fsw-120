  
import React, { Component } from 'react';
import TweetsList from '../TweetList/tweetList';
import './tweetPost.css';
import FeedList from "../FeedList/FeedList";

class TweetPost extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            tag: "",
            textArea: "",
            tweets: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleDelete = (i) => {
        let removeTweet = this.state.tweets
        removeTweet.splice(i, 1)
        this.setState( { tweets: removeTweet })
    }

    handleEdit = (i, changes) => {
        this.setState(prevState => {
        let editedTweets = prevState.tweets
        const index = editedTweets.findIndex(tweet => tweet.id === i)
        const updatedTweet = Object.assign(editedTweets[index], changes)
        return ({ updatedTweet })})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newTweet = {
            userName: this.state.userName,
            tag: this.state.tag,
            textArea: this.state.textArea
        }
        this.setState({ 
            tweets : [ newTweet, ...this.state.tweets ], 
            userName: "",
            tag: "",
            textArea: ""
        })
    }

    render() {
        return (
            <div>
                <div className="twitterContainer">
                    <img src='https://img.icons8.com/fluent/64/000000/twitter.png' alt="logo"/>
                   
                    <h1>Twitter</h1>
                </div>
                <form className="postWrapper" id="tweetArea" onSubmit={this.handleSubmit}>
                    <input
                        className="userName"
                        type="text"
                        name="userName"
                        value={this.state.userName} 
                        placeholder="Your Name Here" 
                        onChange={this.handleChange}
                        minLength="5"
                        required={true}
                    />
                    <input
                        className="atName"
                        type="text"
                        name="tag"
                        value={this.state.tag} 
                        placeholder="@username" 
                        onChange={this.handleChange}
                        minLength="5"
                        required={true}
                    />
                    <button className="tweetButton">Tweet</button>
                    <div className="textArea">
                        <textarea
                            className="textBox"
                            form="tweetArea"
                            name="textArea"
                            placeholder="Tell Us What's Happening..."
                            value={this.state.textArea}
                            rows="8"
                            cols="62"
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                    </div>
                </form>
                <TweetsList
                    tweets={this.state.tweets}
                    handleEdit={(i, edits) => {
                        this.handleEdit(i, edits)}}
                    handleDelete={this.handleDelete}  
                />
                <FeedList />
            </div>
        );
    }
}


export default TweetPost;