import cross from '../assests/cross.png';
import circle from '../assests/circle.png';
const Tictactoe = () => {

    return (
        <>
            <div className="tictactoe">
                <div className='add-border rm-left rm-top flex-center'><img className='icon' src={cross}></img> </div>
                <div className='add-border rm-top flex-center'><img className='icon' src={circle}></img> </div>
                <div className='add-border rm-top rm-right flex-center'><img className='icon' src={cross}></img> </div>

                <div className='add-border rm-left flex-center'><img className='icon' src={cross}></img> </div>
                <div className='add-border flex-center'> </div>
                <div className='add-border rm-right flex-center'></div>

                <div className='add-border rm-left rm-bottom flex-center'> </div>
                <div className='add-border rm-bottom flex-center'><img className='icon' src={cross}></img> </div>
                <div className='add-border rm-bottom rm-right flex-center'><img className='icon' src={circle}></img> </div>
            </div>
        </>
    );
}

export default Tictactoe;