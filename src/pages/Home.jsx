import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { DashBoardContext } from '../context/AppContext';
import axios from 'axios';

const URL = 'http://localhost:8080';
const Home = () => {
    const navigate = useNavigate();
    const { invitations, setInvitations } = useState({});
    useEffect(() => {
        if (!data.password || !data.username) navigate('/');
        // else {
        //     console.log('request to backend');
        //     axios.post(`${URL}/invitation`, data).
        //         then(res => {
        //             setInvitations((prev) => {
        //                 prev = res.data;
        //             })
        //         }).
        //         catch((err) => console.log(err, 'invitations not working'));
        // }

        console.log(invitations);

    }, []);

    const { data, setData } = useContext(DashBoardContext);
    return (
        <>
            <div className='homePage'>
                <h3 className='home-side-heading'>Your Games</h3>
                <div className='flex-center'>
                    <h1 className='home-primary-heading'>No Games Found</h1> {/* here i need to makes changes later on */}
                    <Link to="/home/invite">
                        <Button btnColor="btn-yellow" content="Start a new game" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;