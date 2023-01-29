import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Input from '../components/Input'
import Button from '../components/Button';
import logo from '../assests/back-navigation.png';
import Popup from '../components/Popup';
import { Navigate, Link } from 'react-router-dom';
import { DashBoardContext } from '../context/AppContext';

const URL = 'https://capricorn32.onrender.com';
const Register = () => {
    const { data, setData } = useContext(DashBoardContext);
    const [result, setResult] = useState({
        status: false,
        message: '',
        popup: 'none'
    });


    function sendData() {
        console.log("function is calls");
        axios.post(`${URL}/register`, data)
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
                    <p className='register-sub-heading' >Create account</p>
                    <p className='register-main-heading'>Let's get to know you better!</p>
                </div>
                <div className='flex-center'>
                    <Input labelName='Your Name' name='name' type="text" placeholder="Type your name here" data={data} setData={setData} />
                    <Input labelName='Username' name='username' type="text" placeholder="Type your username here" data={data} setData={setData} />
                    <Input labelName='Email' name='email' type="email" placeholder="Type your email here" data={data} setData={setData} />
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
export default Register;