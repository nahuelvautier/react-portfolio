import './Header.css';
import MenuButton from '../Menu-Button/Menu-Button';
import { Link, NavLink } from 'react-router-dom';
import SwitchModeButton from '../Switch-Mode-Button/Switch-Mode-Button';

export default function Header () {
  return (
    <header className="header-container" data-dark>
      <figure className="logo-container">
        <Link to=""><img src="./src/assets/N.png" loading="lazy" alt="Nahuel Vautier" /></Link>
        <figcaption><Link to="">Nahuel Vautier</Link></figcaption>
        <SwitchModeButton />
      </figure>
      <div id="panel" className="panel">
        <nav className="nav-container">
          <NavLink className={ ({ isActive })=> isActive ? "nav-item-active" : undefined } to="/portfolio">Portafolio</NavLink>
          <NavLink className={ ({ isActive })=> isActive ? "nav-item-active" : undefined } to="/curriculum-vitae">Curriculum</NavLink>
          <NavLink className={ ({ isActive })=> isActive ? "nav-item-active" : undefined } to="/contact">Contacto</NavLink>
          <NavLink className={ ({ isActive })=> isActive ? "nav-item-active" : undefined } to="/login">Iniciar Sesión</NavLink>
        </nav>
      </div>
      <MenuButton />
    </header>
  );
}