import React from 'react';


const Feed = (props) => {

    return (
        <div className="tweetContainer">
        <div className="tweetBody">
            <div className="innerBody">
                <img className="picture" src={props.item.imageName} alt="person"/>
                <div className="body">
                <div className="innerBody">
                    <p className="name">{props.item.name}</p>
                    <p className="handle">{props.item.tag}</p>
                </div>
                    <p className="tweet">{props.item.message}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Feed;