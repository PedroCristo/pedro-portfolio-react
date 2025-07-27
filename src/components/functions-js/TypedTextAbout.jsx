import { useEffect } from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

function TypedTextAbout({ langPt }) {
    useEffect(() => {
      const typedElement = document.querySelector(".typing2");
      if (typedElement) {
        let strings = ["Developer", "Designer", "Freelancer"];
        if (langPt) {
          strings = ["Desenvolvedor", "Designer", "Freelancer"];
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
  
    return <span className="typing2"></span>;
  }
  
  TypedTextAbout.propTypes = {
    langPt: PropTypes.bool,
  };

  export default TypedTextAbout;