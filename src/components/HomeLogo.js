import './logoStyle.css';
import homelogo from '../pictures/homelogo.jpg';

const HomeLogo = () => {
    return (
        <div className='logoStyle'>
            <img src={homelogo} alt='HOME LOGO' />
        </div>
    )
} 
export default HomeLogo;