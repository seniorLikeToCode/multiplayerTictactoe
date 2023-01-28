import Input from '../components/Input'
import Button from '../components/Button';
import logo from '../assests/back-navigation.png';
import Popup from '../components/Popup';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='registerPage'>
                <div>
                    <Link to="/" >
                        <img className='navigation-logo' src={logo} alt="back" />
                    </Link>
                </div>
                <div className='register-heading'>
                    <p className='register-sub-heading' >Login</p>
                    <p className='register-main-heading'>Please enter your details</p>
                </div>
                <div className='flex-center'>
                    <Input labelName='username' name='name' type="text" placeholder="Type your username here" />
                    <Input labelName='Password' type="text" placeholder="Type your password here" />
                </div>
                
                <div className='flex-center btnpos'>
                    <Popup bg_color='red' content='Enter correct details.' ></Popup>
                    <Link to="/home">
                        <Button btnColor="btn-yellow" content="Login" />
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Login;