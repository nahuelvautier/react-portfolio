import './Header.css';
import MenuButton from '../Menu-Button/Menu-Button';

export default function Header () {
  return (
    <header className="header-container" data-dark>
      <figure className="logo-container">
        <a href="index.html"><img src="./src/assets/N.png" loading="lazy" alt="Nahuel Vautier" /></a>
        <figcaption><a href="index.html">Nahuel Vautier</a></figcaption>
      </figure>
      <div id="panel" className="panel">
        <nav className="nav-container">
          <a className="nav-item" href="portfolio.html">Portfolio</a>
          <a className="nav-item" href="curriculum-vitae.html">Curriculum Vitae</a>
          <a className="nav-item" href="contact.html">Contact</a>
          <div className="nav-item"><span className="dark-theme-btn"><i className="fas fa-toggle-off"> </i></span></div>
        </nav>
      </div>
      <MenuButton />
    </header>
  );
}