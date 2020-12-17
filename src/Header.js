import React from 'react'
import './Header.css'
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';
function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
            <Avatar alt={user?.DisplayName} src={user?.photoURL} />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search slack cammunity"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
