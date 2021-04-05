import React, { Component } from 'react';
import Tweet from '../Tweet/Tweet';


class TweetsList extends Component {
    
    render() {
    const mappedTweets = this.props.tweets.map((tweet) => { 
      
        return (
            <div>
            <Tweet 
                key={tweet.id}
                index={tweet.id}
                userName={tweet.userName}
                tag={tweet.tag}
                textArea={tweet.textArea}
                handleDelete={this.props.handleDelete}
                handleEdit={(i, edits) => {
                this.props.handleEdit(i, edits)}}
                tweet={tweet}
            />
            </div>
        );
    })
        return (
            <div>
                {mappedTweets}
            </div>
        );
    }
}

export default TweetsList;