import React from 'react'
import './Messages.css'
function Message({ message, timestamp, user, userImage}) {
    return (
        <div className="message">
            <img alt='' src={userImage}/>
            <div className="messages__info">
                <h4>{user} <span className="message__time">
                {new Date(timestamp?.toDate()).toUTCString()}
                </span> </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
