import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  retirn(
    <div className="blockNavigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/bbcnews">Bbc News</NavLink>
      <NavLink to="/bitcoin">Bitcoin</NavLink>
      <NavLink to="/sport">Sport</NavLink>
    </div>
  );
};

export default Navigation;
