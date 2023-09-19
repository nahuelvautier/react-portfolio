import './Contact.css';

export default function Contact () {
  return (
    <>
      <section className="contact-porter">
        <div>
          <h3>
            Escribeme!
            <br />
            A la brevedad nos pondrémos en contacto.
          </h3>
        </div>
        <article className="contact-form-article">
          <form className="contact-form" action="https://formsubmit.co/nahuel.vautier@gmail.com" method="POST"
            autoComplete="off">
            <legend>Envíame un mensaje</legend>
            <input type="text" name="name" placeholder="Escribe tu nombre..."
              title="Este campo solo acepta letras y espacios en blanco"
              pattern="^[aA-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+(\s)*[aA-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+"
              required />
            <input type="email" name="email" placeholder="Escribe tu email..." title="Email incorrecto"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required />
            <input type="text" name="subject" placeholder="Asunto..." title="El asunto es requerido" required />
            <textarea name="comments" cols={50} rows={5} placeholder="Escribe tu mensaje..."
              title="Tu comentario no debe exceder los 255 caractéres" data-pattern="^.{1,255}$" required></textarea>
            {/* <input type="hidden" name="_captcha" value="false"> */}
            <input id="form-btn" type="submit" value="Enviar" />
            <div>
              <img className="contact-form-loader hidden" src="./src/assets/tail-spin.svg" alt="Cargando" />
            </div>
            <div>
              <p className="contact-form-response hidden"></p>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}