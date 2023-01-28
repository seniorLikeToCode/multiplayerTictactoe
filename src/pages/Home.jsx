import Button from '../components/Button';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className='homePage'>
                <h3 className='home-side-heading'>Your Games</h3>
                <div className='flex-center'>
                    <h1 className='home-primary-heading'>No Games Found</h1> {/* here i need to makes changes later on */}
                    <Link to="/home/invite">
                        <Button btnColor="btn-yellow" content="Start a new game" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;