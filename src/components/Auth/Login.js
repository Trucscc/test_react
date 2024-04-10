import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();
    const handleLogin = async() =>{
        // Validate

        // Submit into API
        let res = await postLogin(email, password);
        console.log('>>> check res: ', res);
        navigate('/');
    }
    const handleChangePass = ()=>{
       alert('me');
    }
    return (
        <div className="login-container">
            <div className='header'>
                 <span>Don't have an account yet?
                    <button className='btn-signup'>Sign_Up</button>
                 </span>
            </div>
            <div className='tille col-4 mx-auto'>
                <h3>Login Au_Control</h3> 
            </div>
            <div className='welcom col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={'email'} 
                    className='form-control' 
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={'password'} 
                    className='form-control' 
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    />
                </div>
                <span className='forgot-password' onClick={()=>handleChangePass}>Forgot password?</span>
                <div>
                    <button className='btn-submit' 
                         onClick={handleLogin}>Login to Au_Control
                    </button>
                </div>
                <div className='text-center'>
                     <span className='back' onClick={()=>{navigate('/')}}>&#60; &#60; &#60; Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}

export default Login;


