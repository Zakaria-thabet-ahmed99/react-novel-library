import { NavLink } from "react-router-dom";
const NavBar = ({favorites}) => {


    const getNavLinkClass = ({ isActive }) =>
        isActive ? "active" : "";

    return ( 


        <>
  <header className="site-header">
    <div className="container">
      <h1 className="logo">
        <span>📚 </span>Novel Library
      </h1>
      <nav className="navbar">
        <NavLink to="/" end className={getNavLinkClass}>Home</NavLink> 
        <NavLink
            to="/favorites"
            className={getNavLinkClass}>
            Favorites ({favorites.length})
        </NavLink>
    </nav> 
    </div>
  </header>
</>
    );
}

export default NavBar;