import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Input from '../components/Input'
import Button from '../components/Button';
import logo from '../assests/back-navigation.png';
import Popup from '../components/Popup';
import { Link, Navigate } from 'react-router-dom';


const URL = 'http://localhost:8080';
const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const [result, setResult] = useState({
        status: false,
        message: '',
        popup: 'none'
    });

    function sendData() {
        console.log("function is calls");
        axios.post(`${URL}/login`, data)
            .then(res => {
                setResult(res.data)
                console.log(res);
            });
        
    }


    return (
        <>
            <div className='registerPage'>
                <div>
                    <Link to="/" >
                        <img className='navigation-logo' src={logo} alt="back" />
                    </Link>
                </div>
                <div className='register-heading'>
                    <p className='register-sub-heading' >Login</p>
                    <p className='register-main-heading'>Please enter your details</p>
                </div>
                <div className='flex-center'>
                    <Input labelName='username' name='username' type="text" placeholder="Type your username here" data={data} setData={setData} />
                    <Input labelName='Password' name='password' type="text" placeholder="Type your password here" data={data} setData={setData} />
                </div>
                
                <div className='flex-center btnpos'>
                    <Popup result={result}></Popup>
                    {result.status ? <Navigate to="/home" /> : <Button handler={sendData} btnColor="btn-yellow" content="Login" />}
                </div>
            </div>
        </>
    );
}
export default Login;