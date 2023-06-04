import PropTypes from "prop-types";
import ContactDetailsCard from "../ui/ContactDetailsCard";
import {
  ContactDetailsDataEn,
  ContactFormDataEn,
} from "../../data/en/contact-section-en";
import ContactFormCard from "../ui/ContactFormCard";

function ContactSectionEn(props) {
  return (
    <section id="contact-section" className="contact">
      <div className="max-width">
        <h2 className={props.class}>{props.title}</h2>
        <div className="contact-content">
          <div className="column left">
            <ContactDetailsCard ContactDetailsData={ContactDetailsDataEn} />
          </div>
          <div className="column right">
            <ContactFormCard ContactFormData={ContactFormDataEn}/>
          </div>
        </div>
      </div>
    </section>
  );
}

ContactSectionEn.propTypes = {
  class: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContactSectionEn;
