import { NavLink } from "react-router-dom";
import  "./navigation.css";
import BbcLogo from "../components/BbcLogo";
import BitcoinLogo from '../components/BitcoinLogo';
import SportLogo from '../components/TechLogo';
import HomeLogo from '../components/HomeLogo';


const Navigation = () => {
  const styleClass= ({isActive}) => ( (isActive) ? 'activeClass':'nonactiveClass' );
  return(
    <div className="blockNavigation">      
      <NavLink to="/" className={styleClass}><HomeLogo /></NavLink>
      <NavLink to="/bbcnews" className={styleClass}><BbcLogo /></NavLink>
      <NavLink to="/bitcoinnews" className={styleClass}><BitcoinLogo /></NavLink>
      <NavLink to="/technews" className={styleClass}><SportLogo /></NavLink>
    </div>
  );
};

export default Navigation;
