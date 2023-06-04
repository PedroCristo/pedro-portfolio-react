import PropTypes from "prop-types";
import ContactForm from "./ContactForm";


function ContactFormCard({ ContactFormData }) {
  return (
    <div>
      {ContactFormData.map((item) => (
        <ContactForm
          key={item.id}
          formTitle={item.formTitle}
          formName={item.formName}
          formEmail={item.formEmail}
          formPhone={item.formPhone}
          formCompany={item.formCompany}
          formSubject={item.formSubject}
          formMessage={item.formMessage}
          formButton={item.formButton}
          formAlertMessage={item.formAlertMessage}
          thanksPageUrl={item.thanksPageUrl}
        />
      ))}
    </div>
  );
}

ContactFormCard.propTypes = {
    ContactFormData: PropTypes.string.isRequired,
}
export default ContactFormCard;
