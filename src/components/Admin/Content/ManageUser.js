import ModalCreateUser from "./ModalCreaUser"

export const ManageUser = (props) => {
    return (
        <div className="manage-user-containner">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div>
                    <buttom className='btn btn-primary'>Add New_User</buttom> 
                </div>
                <div>
                    table users
                    <ModalCreateUser/>
                </div>
                
            </div>
        </div>
    )
}