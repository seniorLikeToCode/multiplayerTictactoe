import Button from '../components/Button';
import {Link} from 'react-router-dom';

const Entry = () => {
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