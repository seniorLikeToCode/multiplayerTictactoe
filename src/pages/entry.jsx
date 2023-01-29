import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { DashBoardContext } from '../context/AppContext';

const Entry = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!data.password || !data.username) navigate('/');
    }, []);

    const { data, setData } = useContext(DashBoardContext);
    return (
        <>
        <div className='entryPage'>
            <div>
                <h3 className='secondary-heading'>async</h3>
                <h1 className='primary-heading'>tic tac toe</h1>
            </div>
                <div className='flex-center btnpos'>
                    <Link to="/login">
                        <Button btnColor="btn-blue" content="Login" />
                    </Link>
                    <Link to="/register" >
                        <Button btnColor="btn-yellow" content="Register" />
                    </Link>
            </div>
        </div >
        </>
    );
}

export default Entry;