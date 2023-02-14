import './logoStyle.css';
import techlogo from '../pictures/techlogo.jpg';

const TechLogo = () => {
    return (
        <div className='logoStyle'>
           <img src={techlogo} alt="TECH LOGO"/>
        </div>
    );
};
export default TechLogo;