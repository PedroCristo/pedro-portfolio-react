import PropTypes from "prop-types";
import SkillsProgressBar from "./ui/SkillsProgressBar";

function SkillsSection( {title, titleClass, message1, message2, content, button} ) {
  return (
    <section id="skills-section" className="skills">
      <div className="max-width">
        <h2 className={titleClass}>{title}</h2>
        <div className="skills-content">
          <div className="column left">
            <h3 className="text">{message1}</h3>
            <h4 className="text-colored">{message2}</h4>
            <p className="content-text">
              {content}
            </p>
            <a href="#contact-section" className="btn">
              {button}
            </a>
          </div>
          <div className="column right">
            <div className="skills-img">
              <img src="images/my_profile_img_1.jpg" alt="PROFILE IMAGE" />
            </div>
          </div>
          <SkillsProgressBar />
        </div>
      </div>
    </section>
  );
}

SkillsSection.propTypes = {
    title: PropTypes.string.isRequired,
    titleClass: PropTypes.string.isRequired,
    message1: PropTypes.string.isRequired,
    message2: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
}

export default SkillsSection;
