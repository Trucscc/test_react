import videohomepage from '../../assets/images/hero.mp4';
//import { Button } from 'react-bootstrap';
import './homePage.scss';

export const HomePage = (props) => {
    return (
        <div >
            <video autoPlay muted loop>
                <source src={videohomepage} type="video/mp4"/>
            </video>
            <div className='homepage-container'>
                <div className='title-1'>AU-CONTROL APP</div>
                <div className='title-2'>
                    Xin trân trọng giới thiệu các bạn một phầm mềm điều khiển tự động các thiết bị ngoại
                </div>
                <div className='title-3'>
                    <button className='btn-signup'>Sign_Up</button>
                    {/* <Button className= 'btn-signup'>Sign_Up</Button> */}
                </div>
            </div>
        </div>
    )
}