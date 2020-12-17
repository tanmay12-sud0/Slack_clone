import React, { useEffect, useState } from 'react'
import './Chat.css'
import {useParams} from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import { db } from './firebase';
import Messages from './Message'
import ChatInput from './ChatInput'
function Chat() {
    const {roomID} = useParams()
    const [roomDetails, setroomDetails] = useState([])
    const [roomMessages, setroomMessages] = useState([])
    useEffect(() => {

        if(roomID){
            db.collection('room').doc(roomID).onSnapshot(snapshot => setroomDetails(snapshot.data())
                
            )
        }

     

        db.collection("room").doc(roomID).collection("message").orderBy("timestamp","asc").onSnapshot(snapshot => setroomMessages(snapshot.docs.map(doc => doc.data())))
        


    }, [roomID])
    console.log(roomMessages)
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                    <InfoIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {
                    roomMessages.map(msg => (
                        <Messages message={msg.message}
                            timestamp={msg.timestamp}
                            user= {msg.user}
                            userImage={msg.userImage}
                        />
                    ))
                }
            </div>
            <ChatInput channelId={roomID} channelName={roomDetails.name} />
        </div>
    )
}

export default Chat 
