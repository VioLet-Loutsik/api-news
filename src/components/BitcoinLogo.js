import './logoStyle.css';
import btslogo from '../pictures/btclogo.jpg';

const BitcoinLogo = () => {
    return (
        <div className='logoStyle'>
            <img src={btslogo} alt='BITCOIN LOGO' />
        </div>
    )
} 
export default BitcoinLogo;