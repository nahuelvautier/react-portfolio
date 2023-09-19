import { Link } from 'react-router-dom';
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
              de aplicaciones web, las cuáles algunas se podrán encontrar en mi <Link to="/portfolio">portfolio.</Link>
              También soy egresado de la segunda instancia del curso "Argentina Programa" -
              #YoProgramo, habiendo así obtenido una certificación que avala mi conocimiento la cual podrás encontrar en
              <a href="https://drive.google.com/file/d/14nU9GK0lMlOsXjpORV0VM80wsNRq-LTS/view?usp=sharing" target="_blank"> este link.</a>
              <br /><br />
              Si estás interesado en tener tu propia web o tenés alguna duda
              <br />
              en la que creas que te puedo ayudar <Link to="/contact">contactame!</Link>
              <br />
              Si querés conocer un poco más de mi trayectoria profesional podes visitar la sección de mi <Link to="/curriculum-vitae">curriculum-vitae.</Link>
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