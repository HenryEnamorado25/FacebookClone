import React from 'react'
import "./SideBar.css";
import SideBarRow from './SideBarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StoreIcon from '@mui/icons-material/Store';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useStateValue} from "./StateProvider";


function SideBar() {
    const [{user},dispatch]= useStateValue();
    return (
        <div className="sidebar">
            <SideBarRow src={user.photoURL} title={user.displayName}/>
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SideBarRow Icon={PeopleIcon} title="Friends"/>
            <SideBarRow Icon={ChatIcon} title="Messenger"/>
            <SideBarRow Icon={StoreIcon} title="Marketplace"/>
            <SideBarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SideBarRow Icon={ExpandMoreIcon} title="Marketplace"/>
        </div>
    )
}

export default SideBar
