import React, { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assests/back-navigation.png';
import Input from '../components/Input';
import { DashBoardContext } from '../context/AppContext';
import axios from 'axios';

const URL = 'http://localhost:8080';
const Invite = () => {
    const navigate = useNavigate();
    const { data, setData } = useContext(DashBoardContext);
    const [invitations, setInvitations] = useState({});
    const [invite, setInvite] = useState({
        emailPlayer1: data.email,
        emailPlayer2: '',
    })
    useEffect(() => {
        if (!data.password || !data.username) navigate('/');
    }, []);

    function sendInvite() {
        console.log('sending req');
        axios.post(`${URL}/invite`, invite).
            then(res => {
                setInvitations((prev) => {
                    prev = res.data;
                })
                console.log(res);
            }).
            catch((err) => console.log(err, 'invitations not working'));
    }

    return (
        <>
            <div className='invitePage'>
                <div>
                    <Link to='/home'>
                        <img className='navigation-logo' src={logo} alt="back" />
                    </Link>
                </div>
                <div className='register-heading'>
                    <p className='register-sub-heading' >Create account</p>
                    <p className='register-main-heading'>Let's get to know you better!</p>
                </div>
                <Input labelName='Email' name='emailPlayer2' type="email" placeholder="Type your email here" setData={setInvite} />
                <Link to="/home" className='btnpos'>
                    <Button handler={sendInvite} btnColor="btn-yellow" content="Start a new game" />
                </Link>
            </div>
        </>
    );
}

export default Invite;