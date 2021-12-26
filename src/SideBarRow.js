import { Avatar } from '@mui/material'
import React from 'react'
import "./SideBarRow.css"

function SideBarRow({title,src,Icon}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow
