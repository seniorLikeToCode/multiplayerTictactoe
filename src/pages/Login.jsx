import Input from '../components/Input'
import Button from '../components/Button';
import logo from '../assests/back-navigation.png';
import Popup from '../components/Popup';

const Login = () => {
    return (
        <>
            <div className='registerPage'>
                <div>
                    <img className='navigation-logo' src={logo} alt="back" />
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
                    <Button btnColor="btn-yellow" content="Login" />
                </div>
            </div>
        </>
    );
}
export default Login;