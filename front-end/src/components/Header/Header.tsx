import './Header.css';
import MenuButton from '../Menu-Button/Menu-Button';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {
  return (
    <header className="header-container" data-dark>
      <figure className="logo-container">
        <Link to=""><img src="./src/assets/N.png" loading="lazy" alt="Nahuel Vautier" /></Link>
        <figcaption><Link to="">Nahuel Vautier</Link></figcaption>
      </figure>
      <div id="panel" className="panel">
        <nav className="nav-container">
          <NavLink className={ ({ isActive })=> isActive ? "nav-item-active" : null } to="/portfolio">Portfolio</NavLink>
          <NavLink className={ ({ isActive })=> isActive ? "nav-item-active" : null } to="/curriculum-vitae">Curriculum Vitae</NavLink>
          <NavLink className={ ({ isActive })=> isActive ? "nav-item-active" : null } to="/contact">Contact</NavLink>
          <div className="nav-item"><span className="dark-theme-btn"><i className="fas fa-toggle-off"> </i></span></div>
        </nav>
      </div>
      <MenuButton />
    </header>
  );
}