import './Portfolio.css';

export default function Portfolio () {
  return (
    <>
      <h3 className="portfolio-h3-project">Proyectos profesionales:</h3>
      <section className="portfolio-container">
        <article>
          <a href="https://micaelacastano.netlify.app/" target="_blank">
            <h4>Micaela Castanó - Estudio contable</h4>
          </a>
          <div id="micaela-castano">
          </div>
        </article>
      </section>

      <hr />

      <h3 className="portfolio-h3-project">Proyectos personales / académicos:</h3>

      <section className="portfolio-container">

        <article>
          <a href="https://weather-clime.netlify.app" target="_blank">
            <h4>Weather App</h4>
          </a>
          <div id="weather-app"></div>
          <hr />
          <div className="code-frame-container">
            <a href="https://github.com/nahuelvautier/weather-app" target="_blank">Ver código</a>
            <i className="fab fa-github"></i>
          </div>
        </article>

        <article>
          <a href="https://nahuelvautier.github.io/SPA-Music" target="_blank">
            <h4>SPA Music</h4>
          </a>
          <div id="spa-music">
          </div>
          <hr />
          <div className="code-frame-container">
            <a href="https://github.com/nahuelvautier/SPA-Music" target="_blank">Ver código</a>
            <i className="fab fa-github"></i>
          </div>
        </article>

        <article>
          <a href="https://nahuelvautier.github.io/SPA-WordPress-API" target="_blank">
            <h4>SPA WP API</h4>
          </a>
          <div id="spa-wp-api"></div>
          <hr />
          <div className="code-frame-container">
            <a href="https://github.com/nahuelvautier/SPA-WordPress-API" target="_blank">Ver código</a>
            <i className="fab fa-github"></i>
          </div>
        </article>

        <article>
          <a href="https://nahuelvautier.github.io/clapperboardata" target="_blank">
            <h4>Clapperboardata</h4>
          </a>
          <div id="clapperboardata"></div>
          <hr />
          <div className="code-frame-container">
            <a href="https://github.com/nahuelvautier/clapperboardata" target="_blank">Ver código</a>
            <i className="fab fa-github"></i>
          </div>
        </article>

      </section>
    </>
  );
}