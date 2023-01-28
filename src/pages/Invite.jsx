import Button from '../components/Button';
import { Link } from 'react-router-dom';
import logo from '../assests/back-navigation.png';
import Input from '../components/Input';
const Invite = () => {
    return (
        <>
            <div className='invitePage'>
                <div>
                    <img className='navigation-logo' src={logo} alt="back" />
                </div>
                {/* <div className='flex-center'> */}
                    <div className='register-heading'>
                        <p className='register-sub-heading' >Create account</p>
                        <p className='register-main-heading'>Let's get to know you better!</p>
                    </div>
                    <Input labelName='Email' name='name' type="email" placeholder="Type your email here" />   
                    <Link to="/home/start" className='btnpos'>
                        <Button btnColor="btn-yellow" content="Start a new game" />
                    </Link>
                {/* </div> */}
            </div>
        </>
    );
}

export default Invite;