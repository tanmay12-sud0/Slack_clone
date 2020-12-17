import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {db} from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [channels, setchannels] = useState([]);
    const [{user}] = useStateValue();
    // .docs.map(doc => ({
    //     id: doc.id,
    //     name: doc.data().name,
    // }))

    useEffect(() => {
       db.collection("room").onSnapshot(snapshot => (
          setchannels(snapshot.docs.map(doc => ({
              id: doc.id,
              name: doc.data().name
          })))
       ))
    }, [])
    // console.log(channels)
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <div className="sidebar__info">
            <h2>Slack Community</h2>
                <h3>
                    <FiberManualRecordIcon />
                   {user?.displayName}
                </h3>
            </div>
            <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOption id={channels.id} OnChannelOption Icon={AddIcon} title="Add Channel"/>
            
            {
                channels.map(channel => (
                  <SidebarOption title={channel.name} id={channel.id}/>  
                ))
            }

        </div>
    )
}

export default Sidebar
