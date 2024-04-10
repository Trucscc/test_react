//import 'react-pro-sidebar/dist/css/styles.css'

import { Sidebar, Menu, MenuItem, SubMenu   } from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/images/bg2.jpg';
//import { DiReact } from 'react-icons/di';
import { FcHome } from "react-icons/fc";
import {MdDashboard} from "react-icons/md"
import { Link } from 'react-router-dom';

export const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar} = props;
    return (
        <>
            <Sidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
                >
                <Menu>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <FcHome size={'2em'} color={'00bfff'}/>
                      <span> Auto_Control_App</span>
                    </div>
                </Menu>

                <Menu>
                    <MenuItem icon={<MdDashboard />} component={<Link to="/admins/" />}>
                         Dashboard   {<FaRegLaughWink />} 
                    </MenuItem>

                    <MenuItem icon={<FaTachometerAlt />}> components</MenuItem>

                    <SubMenu
                        icon={<FaList />}
                        title = "withPrefix"
                    >
                        <MenuItem component={<Link to="/admins/manager-users" />}>
                            Quản lý Users
                            {/* <NavLink to="/admins/manager-users" className="nav-link" /> */}
                        </MenuItem>
                        <MenuItem>Quản lý ID_Board </MenuItem>
                        <MenuItem>Quản lý Timer</MenuItem>
                    </SubMenu>

                    <SubMenu
                         icon={<FaHeart/>} 
                    >
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                    </SubMenu>
                </Menu>

                <Menu style={{ textAlign: 'center' }}>
                    <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                    >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                             viewSource
                        </span>
                    </a>
                    </div>
                </Menu>
            </Sidebar>
        </>
    )
}
// default SideBar;