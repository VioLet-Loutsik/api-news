import '../components/logoStyle.css';
import bbclogo from '../pictures/bbclogo.jpg';

const BbcLogo = () => {
  return (
    <div className="logoStyle">
      <img src={bbclogo} alt="BBC LOGO" />
    </div>
  );
};
export default BbcLogo;
