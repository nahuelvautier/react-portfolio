import './Footer.css';

export default function Footer () {
  return (
    <footer className="footer-container">
    <p>Para comunicarte conmigo solo <a href="contact.html">clic aquí!</a></p>
    <div className="social">
      <div className="instagram">
        <i className="fab fa-instagram"></i>
        <a href="https://instagram.com/nahuel.vautier" target="_blank">Instagram</a>
      </div>
      <div className="linkedin">
        <i className="fab fa-linkedin"></i>
        <a href="https://linkedin.com/in/nahuelvautier/" target="_blank">LinkedIn</a>
      </div>
      <div className="github">
        <i className="fab fa-github"></i>
        <a href="https://github.com/nahuelvautier" target="_blank">GitHub</a>
      </div>
    </div>
    <p className="copyright">2021 &copy; Nahuel Vautier.</p>
  </footer>
  );
}