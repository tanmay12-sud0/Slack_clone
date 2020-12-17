import React from 'react'
import './SidebarOption.css'
import { useHistory} from 'react-router-dom'
import { db } from './firebase';
function SidebarOption({Icon, title, id, OnChannelOption}) {
    const history = useHistory();
    const selectOption = () => {
        if(id) {
              history.push(`/room/${id}`)  
        }else{
            history.push('title')
        }
    }

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name")
        if(channelName) {
            db.collection('room').add({
                name: channelName,

            })
            // history.push(`/room/${id}`)
        }
    }
    return (
        <div className="sidebarOption"
        onClick={ OnChannelOption ? addChannel : selectOption}>
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? (
                <h3>{title}</h3>
            ):
            (
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span> {title}
                   
                </h3>
               
            )}
        </div>
    )
}

export default SidebarOption
