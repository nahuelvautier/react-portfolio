import './Switch-Mode-Button.css';

export default function SwitchModeButton () {
  const ls = localStorage;
  const $selectors = document.querySelectorAll('[data-dark]');


  const darkMode = (): void => {
    $selectors.forEach((el) => el.classList.add('dark-mode'));
    ls.setItem("theme", "dark");
  }

  const lightMode = (): void => {
    $selectors.forEach((el) => el.classList.remove('dark-mode'));
    ls.setItem("theme", "light");
  }

  const switchHandler = (event: any): void => { 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    event.target.checked ? darkMode() :  lightMode()
  };
  
  /* if (ls.getItem("theme") === null) ls.setItem("theme", "light");
  if (ls.getItem("theme") === "light") lightMode();
  if (ls.getItem("theme") === "dark") darkMode(); */
  
  return (
    <div className="status-switch-container">
      <label htmlFor="theme-toggle" className="status-switch-label">
        <input id="theme-toggle" type="checkbox" onChange={switchHandler}/>
        <span className="status-switch-slider"></span>
      </label>
    </div>
  );
}
