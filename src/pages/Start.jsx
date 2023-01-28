import Button from '../components/Button';
import { Link } from 'react-router-dom';
import logo from '../assests/back-navigation.png';
import cross from '../assests/cross.png';
import Tictactoe from '../components/Tictactoe'

const Invite = () => {
    return (
        <>
            <div className='startPage'>
                <div>
                    <img className='navigation-logo' src={logo} alt="back" />
                </div>
                <p className='register-main-heading'>Let's get to know you better!</p>
                <p className='player-piece'>Your piece</p>
                <img className='cross-icon' src={cross} alt='cross'/>
                <p className='player-chance-heading'>Your Move</p>
                <Tictactoe></Tictactoe>
                <div className='btnpos'>
                    <Button btnColor="btn-yellow" content="Submit!  " />
                </div>
            </div>
        </>
    );
}

export default Invite;