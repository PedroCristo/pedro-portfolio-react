import PropTypes from "prop-types";
import TypedTextAbout from "./functions-js/TypedTextAbout";

function AboutSection({
  message1,
  message2,
  message3,
  titleClass,
  content,
  button,
  linkUrl,
  langPt
}) {

  return (
    <section id="about-section" className="about">
      <div className="max-width">
        <h2 className={titleClass}>{message1}</h2>
        <div className="about-content">
          <div className="column left">
            <img src="images/my_profile_img_2.png" alt="ABOUT IMG" />
          </div>
          <div className="column right">
            <h2 className="text text-small">
              {message2}
              <br />
              <span></span>
              <TypedTextAbout langPt={langPt} />
            </h2>
            <h3 className="text-colored">{message3}</h3>
            <br />
            <p className="content-text">{content}</p>
            <a
              href={linkUrl}
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutSection.propTypes = {
  message1: PropTypes.string.isRequired,
  message2: PropTypes.string.isRequired,
  message3: PropTypes.string.isRequired,
  titleClass: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  langPt: PropTypes.string.isRequired,
};

export default AboutSection;
