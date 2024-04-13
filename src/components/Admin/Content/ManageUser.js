import {ModalCreateUser} from "./ModalCreaUser"
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import { useState } from 'react';

export const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    // const handleShowHideModal =(value) =>{
    //     setShowModalCreateUser(value)
    // }
    return (
        <div className="manage-user-containner">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <buttom className='btn btn-secondary' 
                        onClick={()=>setShowModalCreateUser(true)}>
                        <FcPlus/> Add New_User
                    </buttom> 
                </div>
                <div className="table-users-container">
                    table users
                </div>
                <ModalCreateUser 
                     show = {showModalCreateUser}
                     setShow = {setShowModalCreateUser}
                />
            </div>

        </div>
    )
}
//default ManageUser;