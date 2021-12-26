import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {Avatar,IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" />
                <div className="header__input">
                    <SearchIcon/> <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="header__center">
                <div className="header__options 
                header__options--active">
                    <HomeIcon/>
                </div>
                <div className="header__options">
                    <FlagIcon/>
                </div>
                <div className="header__options">
                    <SubscriptionsIcon/>
                </div>
                <div className="header__options">
                    <StorefrontIcon/>
                </div>
                <div className="header__options">
                    <SupervisedUserCircleIcon/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src="https://avatars.githubusercontent.com/u/73149761?v=4"/>
                    <h4>Henry</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
            
        </div>
    )
}

export default Header
