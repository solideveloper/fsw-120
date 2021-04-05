  
import React, { useState } from 'react';
import './tweet.css';
import EditTweet from '../EditTweet/EditTweet'


const Tweet = ({ i, userName, tag, textArea, handleDelete, handleEdit }) => {
const [edit, setEdit] = useState({ editing: false, id: 0 })

    return (
        <div className="tweetContainer">
            <div className="tweetBody">
                <div className="innerBody">
                    <img className="picture" src="https://user-images.githubusercontent.com/72266712/113488946-48f23880-948f-11eb-88ac-042ca356f15e.jpeg" alt="person"/>
                    <div className="body">
                    <div className="innerBody">
                        <p className="name">{userName}</p>
                        <p className="handle">{tag}</p>
                    </div>
                        <p className="tweet">{textArea}</p>
                    </div>
                    <div className='buttonContainer'>
                        <button className="editButton" onClick={() => setEdit({ makeEdits: true, id: i })}> Edit </button>
                        <button className="deleteButton" onClick={() => handleDelete (i) }> Delete </button>
                        </div>
                </div>
                    {edit.makeEdits ? <EditTweet
                    i = {i}
                    handleEdit={(i, edits) => {
                    handleEdit(i, edits)
                    setEdit({makeEdits: false, id: i})
                    }}/>: <p></p> }
            </div>
        </div>
    );
}

export default Tweet;