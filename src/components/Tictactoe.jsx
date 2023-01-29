import { useState } from 'react';
import logo_1 from '../assests/cross.png';
import logo_2 from '../assests/circle.png'; 
const Tictactoe = (initPos,currPlayer) => {
    const [data, setData] = useState(['', '', '', '', '', '', '', '', ''])
    const [turn, setTurn] = useState(null);
    const isValid = (e, index) => {
        if (data[index] === '' && turn) {  // need some fixing here
            data[index] = currPlayer
            setTurn(turn ^ 1);
            document.getElementById(`${index}`).src = `logo_${turn}`
        }
    }

    return (
        <>
            <div className="tictactoe">
                <div className='add-border rm-left rm-top flex-center'><img id='0' className='icon' src={logo_1}></img></div>
                <div className='add-border rm-top flex-center'><img id='1' className='icon' src={logo_1}></img></div>
                <div className='add-border rm-top rm-right flex-center'><img id='2' className='icon' src={logo_1}></img></div>

                <div className='add-border rm-left flex-center'><img id='3' className='icon' src={logo_2}></img></div>
                <div className='add-border flex-center'><img id='4' className='icon' src={logo_1}></img></div>
                <div className='add-border rm-right flex-center'><img id='5' className='icon' src={logo_1}></img></div>

                <div className='add-border rm-left rm-bottom flex-center'><img id='6' className='icon' src={logo_1}></img></div>
                <div className='add-border rm-bottom flex-center'><img id='7' className='icon' src={logo_1}></img></div>
                <div className='add-border rm-bottom rm-right flex-center'><img id='8' className='icon' src={logo_2}></img></div>
            </div>
        </>
    );
}

export default Tictactoe;