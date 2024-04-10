import SideBar from "./SideBar"
import './Admin.scss'
//import { useState } from "react"
import { Outlet } from 'react-router-dom';

const Admin = (props) => {
    //const [collapsed, setCollaped]=useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    {/* <FaBars /> */}
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>
                
            </div>
        </div>
    )
}
export default Admin;