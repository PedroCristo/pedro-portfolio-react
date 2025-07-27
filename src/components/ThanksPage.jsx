import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function ThanksPage({ button, buttonUrl, langPt }) {
  useEffect(() => {
    const typedElement = document.querySelector(".typing-3");
    if (typedElement) {
      let strings = ["Thanks for your email!", "I will contact you as soon as possible"];
      if (langPt) {
        strings = ["Obrigado pelo seu e-mail!", "Entrarei em contato o mais breve possível"];
      }

      const typed = new Typed(typedElement, {
        strings,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });

      return () => {
        typed.destroy(); // Destroy the Typed instance on component unmount
      };
    }
  }, [langPt]);

  return (
    <section id="home" className="home home-tanks-page">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1"></div>
          <h2 className="text-2">Pedro Cristo</h2>
          <div className="text-3">
            <span className="typing-3"></span>
          </div>
          <br />
          <br />
          <Link className="btn" to={buttonUrl}>
            <i className="fas fa-arrow-left"></i>
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}

ThanksPage.propTypes = {
  button: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  langPt: PropTypes.bool.isRequired,
};

export default ThanksPage;

