import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-actions">
        <h2>Christian Onaiwu</h2>

        <div className="footer-links">
          <a href="#header">
            Back to top <FontAwesomeIcon icon={faArrowUp} />
          </a>
          <a href="#projects">Projects</a>
        </div>
      </div>

      <div className="copyright">© 2026 Christian Onaiwu</div>
    </footer>
  );
}

export default Footer;
