//import 'react-pro-sidebar/dist/css/styles.css'

import { Sidebar, Menu, MenuItem, SubMenu   } from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/images/bg2.jpg';

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
                      Auto_Control_App
                    </div>
                </Menu>

                <Menu>
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">New</span>}
                    >
                        Dashboard
                    </MenuItem>

                    <MenuItem icon={<FaGem />}> components</MenuItem>
                    
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                    </SubMenu>

                    <SubMenu
                        prefix={<span className="badge gray">3</span>}
                        title='withPrefix'
                        icon={<FaHeart />}
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