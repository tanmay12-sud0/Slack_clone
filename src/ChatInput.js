// import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './ChatInput.css'
import { db } from './firebase'
import firebase from 'firebase'
import { useStateValue } from './StateProvider'
// import { useStateValue } from './StateProvider'
function ChatInput({ channelName, channelId}) {
    const [input, setinput] = useState('')
    const [{user}] = useStateValue();
    const sendMessage = (e) => {
            e.preventDefault()
            if(channelId) {
                db.collection("room").doc(channelId).collection('message').add({
                    message: input,
                    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userImage: user.photoURL
                })
            }
    }
    return (
        <div className="chatinput">
            <form>
                <input value={input} onChange={e => setinput(e.target.value)} placeholder="Type message here" />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
