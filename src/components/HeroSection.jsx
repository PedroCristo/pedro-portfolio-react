import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ParalaxReady from '../assets/js/my_script';
import TypedTextHome from './functions-js/TypedTextHome';

function HeroSection({ message1, name,  button, message2, langPt }) {
  useEffect(() => {
    ParalaxReady();
  }, []);

  return (
    <section id="home-section" className="home parallax">
    <div className="max-width">
      <div className="home-content">
        <h2 className="text-1">{message1}</h2>
        <h2 className="text-2">{name}</h2>
        <h3 className="text-3">
          {message2} <span></span>
          <TypedTextHome langPt={langPt} />
        </h3>
        <a href="#contact-section" className="btn">
          {button}
        </a>
      </div>
      <div className="social">
        <a href="https://github.com/PedroCristo" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/pedro-cristo/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </section>
  );
}

HeroSection.propTypes = {
  message1: PropTypes.string.isRequired,
  message2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  langPt: PropTypes.string.isRequired,
};

export default HeroSection;

