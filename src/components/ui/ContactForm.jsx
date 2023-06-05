import PropTypes from "prop-types";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


function ContactForm({
  formTitle,
  formName,
  formEmail,
  formPhone,
  formCompany,
  formSubject,
  formMessage,
  formButton,
  formRecaptchError,
  thanksPageUrl,
  lang
}) {
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleRecaptchaChange = () => {
    setIsRecaptchaChecked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRecaptchaChecked) {
      e.target.submit();
    } else {
      setAlertMessage(formRecaptchError);
    }
  };

  return (
    <>
      <h2 className="text" data-aos="fade-in">
        {formTitle}
      </h2>
      <form
        action="https://formsubmit.co/pedro.cristo.webdeveloper@gmail.com"
        name="contactForm"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_next" value={thanksPageUrl} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Email!" />

        <div className="fields">
          <div className="field name">
            <input type="text" name="Name" required placeholder={formName} />
          </div>
          <div className="field email">
            <input type="email" name="Email" required placeholder={formEmail} />
          </div>
        </div>
        <div className="field">
          <input type="tel" name="Phone" placeholder={formPhone} />
        </div>
        <div className="field">
          <input
            type="text"
            name="Company Name"
            required
            placeholder={formCompany}
          />
        </div>
        <div className="field">
          <input
            type="text"
            name="Subject"
            required
            placeholder={formSubject}
          />
        </div>
        <div className="field textarea">
          <textarea
            cols="30"
            rows="10"
            name="Message"
            required
            placeholder={formMessage}
          ></textarea>
        </div>
        <div className="button">
          <button type="submit" className="btn">
            {formButton}
          </button>
        </div>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_REACT_RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
          hl={lang}
        />
        <p className={alertMessage ? "alert" : null}>{alertMessage}</p>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  formEmail: PropTypes.string.isRequired,
  formPhone: PropTypes.string,
  formCompany: PropTypes.string.isRequired,
  formSubject: PropTypes.string.isRequired,
  formMessage: PropTypes.string.isRequired,
  formButton: PropTypes.string.isRequired,
  formRecaptchError: PropTypes.string.isRequired,
  thanksPageUrl: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default ContactForm;
