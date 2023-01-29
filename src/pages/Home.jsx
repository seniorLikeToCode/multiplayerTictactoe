import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { DashBoardContext } from '../context/AppContext';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log(data);
        if (!data.password || !data.username) navigate('/');
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