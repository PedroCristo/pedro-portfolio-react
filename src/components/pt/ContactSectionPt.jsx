import PropTypes from "prop-types";
import ContactDetailsCard from "../ui/ContactDetailsCard";
import {
  ContactDetailsDataPt,
  ContactFormDataPt,
} from "../../data/pt/contact-section-pt";
import ContactFormCard from "../ui/ContactFormCard";

function ContactSectionPt(props) {
  return (
    <section id="contact-section" className="contact">
      <div className="max-width">
        <h2 className={props.class}>{props.title}</h2>
        <div className="contact-content">
          <div className="column left">
            <ContactDetailsCard ContactDetailsData={ContactDetailsDataPt} />
          </div>
          <div className="column right">
            <ContactFormCard ContactFormData={ContactFormDataPt} />
          </div>
        </div>
      </div>
    </section>
  );
}

ContactSectionPt.propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContactSectionPt;