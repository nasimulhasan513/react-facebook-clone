import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'
import './styles/Sidebar.css'

function Sidebar() {
    
    const [{user},dispatch] = useStateValue()
    return (
        <div className="sidebar">
        <SidebarRow src={user.photoURL} title="Nasimul Hasan"/>
            <SidebarRow 
                Icon={LocalHospital}
                title="COVID-19 Information Center"
            />
            <SidebarRow 
            Icon={EmojiFlags}
            title="Pages"/>
            <SidebarRow 
            Icon={People}
            title="Friends"/>
            <SidebarRow 
            Icon={Chat}
            title="Messeges"/>
            <SidebarRow
            Icon={Storefront}
            title="Marketplace"/>
            <SidebarRow
            Icon={VideoLibrary}
             title="Videos"/>
             <SidebarRow
             Icon={ExpandMore}/>
        </div>
    )
}

export default Sidebar
