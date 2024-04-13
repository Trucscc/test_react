import instance from '../ultis/axiosCustomize';
import axios from 'axios';
const postCreateNewUser =(email, password, username, role, userImage ) =>{
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', userImage);
    
    return axios.post('', data) ; // Truyền đường dẫn đã tạo bởi Docker và kiểm bởi Postman
}

const postLogin =(setEmail, setPassword) =>{
    return instance.post(`/login`, {
        email: setEmail,
        password: setPassword
    });
}

const postLogin1 =(email, password) =>{
    return instance.post(`/login`, 
          {email, password}
    );
}

export {postCreateNewUser, postLogin, postLogin1} ;
 //import {postCreateNewUser} from '../../../servics/'