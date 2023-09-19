import Porter from '../Porter/Porter';
import './Home.css';

export default function Home () {
  return (
    <>
    <Porter />
      <section className="index-description">
        <article>
          <div>
            <p>
              Actualmente me encuentro en el constante desarrollo y mantenimiento
              <br />
              de aplicaciones web, las cuáles algunas se podrán encontrar en mi <a href="portfolio.html">portfolio.</a>
              También soy egresado de la segunda instancia del curso "Argentina Programa" -
              #YoProgramo, habiendo así obtenido una certificación que avala mi conocimiento la cual podrás encontrar en
              <a href="https://drive.google.com/file/d/14nU9GK0lMlOsXjpORV0VM80wsNRq-LTS/view?usp=sharing" target="_blank"> este link.</a>
              <br /><br />
              Si estás interesado en tener tu propia web o tenés alguna duda
              <br />
              en la que creas que te puedo ayudar <a href="contact.html">contactame!</a>
              <br />
              Si querés conocer un poco más de mi trayectoria profesional podes visitar la sección de mi <a href="curriculum-vitae.html">curriculum-vitae.</a>
              <br /><br />
              Te invito a recorrer las diferentes secciones de este website a las que puedes acceder en el menú de
              navegación situado en la parte superior derecha del mismo.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}