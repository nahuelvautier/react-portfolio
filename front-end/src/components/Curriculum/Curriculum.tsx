import './Curriculum.css';

export default function Curriculum () {
  return (
    <>
      <section className="cv-porter">
        <article>
          <div>
            <h3>Programador / Desarrollador web</h3>
          </div>
          <div className="cv-pdf"><a href="assets/Curriculum-Vitae.pdf" target="_blank"></a></div>
        </article>
      </section>

      <section className="cv-content">
        <article>
          <h4>Contacto</h4>
          <ul className="cv-list">
            <li>Nombre: Nahuel Jair Vautier</li>
            <li>Teléfono: 
              <a href="https://wa.link/ttqmdw" target="_blank"> <i className="fab fa-whatsapp"></i> +5491157327827</a>
            </li>
            <li>Email: nahuel.vautier@gmail.com</li>
          </ul>
        </article>

        <hr />

        <article>
          <h4>Formación</h4>
          <ul className="cv-list">
            <li>Full-Stack Developer - "Argentina Programa" - #YoProgramo</li>
            <li>Programación web Back-End - Autodidacta</li>
            <li>Programación web Front-End - Autodidacta</li>
            <li>Diseño web y maquetación web - Autodidacta</li>
            <li>E.D.M. N°25 "Dr. Ignacio Arieta" - Educación Secundaria (Completa)</li>
          </ul>
        </article>

        <hr />

        <article>
          <h4>Habilidades</h4>
          <ul className="cv-list">
            <li>Programación web Front-End</li>
            <li>Programación web Back-End</li>
            <li>Diseño y maquetación web</li>
            <li>UI - UX</li>
            <li>WPO</li>
            <li>Inglés nivel: B2</li>
            <li>Autodidacta</li>
          </ul>
        </article>

        <hr />

        <article>
          <h4>Stack tecnológico</h4>
          <aside className="technologies">
            <img src="./src/assets/technologies/html5.svg" loading="lazy" alt="HTML5" />
            <img src="./src/assets/technologies/css.svg" loading="lazy" alt="CSS" />
            <img src="./src/assets/technologies/bootstrap.svg" loading="lazy" alt="Bootstrap" />
            <img src="./src/assets/technologies/javascript.svg" loading="lazy" alt="Javascript" />
            <img src="./src/assets/technologies/git.svg" loading="lazy" alt="Git" />
            <img src="./src/assets/technologies/github.svg" loading="lazy" alt="GitHub" />
            <img src="./src/assets/technologies/react.svg" loading="lazy" alt="React" />
            <img src="./src/assets/technologies/node.svg" loading="lazy" alt="NodeJS" />
          </aside>
        </article>

        <hr />

        <article>
          <h4>Acerca de mí</h4>
          <div>
            <p>
              Soy programador orientado al desarrollo web Full-Stack resido en la ciudad de Buenos Aires,
              Argentina.
              <br /><br />
              Llevo tiempo estudiando diferentes tecnologías.
              Mi interés principal es lograr maestría en el desarrollo web y en el desarrollo de aplicaciones móviles.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}