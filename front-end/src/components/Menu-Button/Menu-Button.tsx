import './Menu-Button.css';

export default function MenuButton () {

  const handleToggler = () => {
    const menuButton = document.getElementById('panel-btn');
    const panelButton = document.getElementById('panel');

    menuButton?.classList.toggle('is-active');
    panelButton?.classList.toggle('is-active');
  }

  return (
    <button 
      onClick={handleToggler}
      id="panel-btn" 
      className="panel-btn hamburger hamburger--emphatic" 
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}