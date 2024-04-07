import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from './components/User/User';                  // Nhập component 'user' từ file 'User.js'trong thư mục Components
import { Admin } from './components/Admin/Admin';
import { HomePage } from './components/Home/HomePage';
import { ManageUser } from './components/Admin/Content/ManageUser';
import { DashBoard } from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App /> }>
          <Route index element={<HomePage /> }/>       
          <Route path="users" element={<User /> }/>            {/*Đây là lệnh để render component của fife User.js*/}  
        </Route>
        <Route path="/admins" element={<Admin /> }>            {/*Đây là lệnh để render component của fife Admin.js*/}  
          <Route element={<DashBoard /> }/> 
          <Route path="manager-users" element={<ManageUser /> }/>
        </Route>
        <Route path="/login" element={<Login /> }/>
      </Routes>    
    </BrowserRouter>
    {/* </React.StrictMode> */}
    
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
