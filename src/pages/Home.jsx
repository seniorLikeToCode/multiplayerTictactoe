import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { DashBoardContext } from '../context/AppContext';
import axios from 'axios';

const URL = 'https://capricorn32.onrender.com';
const Home = () => {
    const { data, setData } = useContext(DashBoardContext);
    const navigate = useNavigate();
    const [invitations, setInvitations] = useState([]);
    useEffect(() => {
        if (!data.password || !data.username) navigate('/');
        else {
            console.log('request to backend');
            axios.post(`${URL}/invitation`, data).
                then(res => {
                    setData((prev) => {
                        return {
                            ...prev,
                            email: res.data.data.email,
                            name: res.data.data.name,
                            gamePlayed: res.data.data.gamePlayed
                        }
                    })
                }).
                catch((err) => console.log(err, 'invitations not working'));
        }
        if (data.gamePlayed.length) {
            setInvitations([]);
            for (let id in data.gamePlayed) {
                axios.post(`${URL}/gamedata`, { gameId: data.gamePlayed[id] }).
                    then(res => {
                        setInvitations((prev) => {
                            return [...prev, res.data];
                        })
                    })
            }
            console.log(invitations)
        }
    }, []);



    return (
        <>
            <div className='homePage'>
                <h3 className='home-side-heading'>Your Games</h3>
                <div className='flex-center'>
                    {/* here i need to makes changes later on */}
                    {
                        data.gamePlayed.length === 0 ?
                            (
                                <>
                                    <h1 className='home-primary-heading'>No Games Found</h1>
                                    <Link to="/home/invite">
                                        <Button btnColor="btn-yellow" content="Start a new game" />
                                    </Link></>
                            ) : (

                                invitations.map((gameData, index) => (
                                    <div key={index} className='playerCard flex-center'>
                                        <h1>Hello, {gameData.data.emailPlayer1} from !</h1>
                                        {/* <div className='fix-btn'> */}
                                        <Link to="/home/invite">
                                            <Button btnColor="fix-btn" content={gameData.data.result == 'none' ? 'View Game' : 'Play!'} />
                                        </Link>
                                        {/* </div> */}
                                    </div>
                                ))
                            )}
                </div>
            </div>
        </>
    );
}

export default Home;