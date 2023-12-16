import './Switch-Mode-Button.css'

export default function SwitchModeButton () {
  const ls = localStorage;
  const $selectors = document.querySelectorAll('[data-dark]');


  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add('dark-mode'));
    ls.setItem("theme", "dark");
  }

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove('dark-mode'));
    ls.setItem("theme", "light");
  }


  const switchHandler = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    if (event.target.checked) {
      darkMode();
      console.log($selectors);
      // I used the length property here.
      /* let  darkModeInterval = setTimeout(() => {
        document.querySelector("#panel").classList.remove("is-active");
        document.querySelector("#panel-btn").classList.remove("is-active");
      }, 120); */
    } else {
      lightMode();
      /* let  lightModeInterval = setTimeout(() => {
        document.querySelector("#panel").classList.remove("is-active");
        document.querySelector("#panel-btn").classList.remove("is-active");
      }, 120); */
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
  
  return (
    <div className="status-switch-container" onChange={switchHandler}>
      <label htmlFor="cash-toggle" className="status-switch-label">
        <input id="cash-toggle" type="checkbox" />
        <span className="status-switch-slider"></span>
      </label>
    </div>
  )
}
