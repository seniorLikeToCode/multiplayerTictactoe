import Input from '../components/Input'
import Button from '../components/Button';
import logo from '../assests/back-navigation.png';
import Popup from '../components/Popup';

const Register = () => {
    return (
        <>
            <div className='registerPage'>
                <div>
                    <img className='navigation-logo' src={logo} alt="back" />
                </div>
                <div className='register-heading'>
                    <p className='register-sub-heading' >Create account</p>
                    <p className='register-main-heading'>Let's get to know you better!</p>
                </div>
                <div className='flex-center'>
                    <Input labelName='Your Name' name='name' type="text" placeholder="Type your name here" />
                    <Input labelName='Username' type="text" placeholder="Type your username here" />
                    <Input labelName='Email' name='name' type="email" placeholder="Type your email here" />
                    <Input labelName='Password' name='name' type="text" placeholder="Type your password here" />
                </div>
                <div className='flex-center btnpos'>
                    <Popup bg_color='green' content='Congratulations!!! Account created.' ></Popup>
                    <Button btnColor="btn-yellow" content="Register" />
                </div>
            </div>
        </>
    );
}
export default Register;