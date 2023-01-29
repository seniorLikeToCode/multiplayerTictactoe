import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import logo from '../assests/back-navigation.png';
import logo_0 from '../assests/cross.png';
import logo_1 from '../assests/circle.png';

const URL = 'https://capricorn32.onrender.com';
const Start = () => {
    const currPlayer = 0;
    const [state, setState] = useState({
        gameId: '',
        emailPlayer1: '',
        emailPlayer2: '',
        result: '',
        state: ''
    })
    const [turn, setTurn] = useState(false);


    // useEffect(() => {
    //     setState((prev) => {
    //         emailPlayer1
    //     })
    //     axios.post(`${URL}/`)
    // }, []);

    

    const isValid = (e, pos) => {
        if (state[pos] === '') {
            setState((prev) => {
                prev[pos] = logo_0
                return [...prev];
            })
        }
    }

    return (
        <>
            <div className='startPage'>
                <div>
                    <Link to='/home'>
                        <img className='navigation-logo' src={logo} alt="back" />
                    </Link>
                </div>
                <p className='register-main-heading'>Let's get to know you better!</p>
                <p className='player-piece'>Your piece</p>
                <img className='cross-icon' src={logo_0} alt='cross' />
                <p className='player-chance-heading'>Your Move</p>
                <div className="tictactoe">
                    <div onClick={(e) => isValid(e, 0)} className='add-border rm-left rm-top flex-center'><img id='0' className='icon' src={state[0]} ></img></div>
                    <div onClick={(e) => isValid(e, 1)} className='add-border rm-top flex-center'><img id='1' className='icon' src={state[1]}></img></div>
                    <div onClick={(e) => isValid(e, 2)} className='add-border rm-top rm-right flex-center'><img id='2' className='icon' src={state[2]}></img></div>

                    <div onClick={(e) => isValid(e, 3)} className='add-border rm-left flex-center'><img id='3' className='icon' src={state[3]}></img></div>
                    <div onClick={(e) => isValid(e, 4)} className='add-border flex-center'><img id='4' className='icon' src={state[4]}></img></div>
                    <div onClick={(e) => isValid(e, 5)} className='add-border rm-right flex-center'><img id='5' className='icon' src={state[5]}></img></div>

                    <div onClick={(e) => isValid(e, 6)} className='add-border rm-left rm-bottom flex-center'><img id='6' className='icon' src={state[6]}></img></div>
                    <div onClick={(e) => isValid(e, 7)} className='add-border rm-bottom flex-center'><img id='7' className='icon' src={state[7]}></img></div>
                    <div onClick={(e) => isValid(e, 8)} className='add-border rm-bottom rm-right flex-center'><img id='8' className='icon' src={state[7]}></img></div>
                </div>
                <div className='btnpos'>
                    <Button btnColor="btn-yellow" content="Submit" />
                </div>
            </div>
        </>
    );
}

export default Start;