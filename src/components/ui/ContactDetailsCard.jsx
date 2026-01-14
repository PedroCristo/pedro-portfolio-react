import PropTypes from "prop-types";
import ContactDetails from "./ContactDetails";

function ContactDetailsCard( {ContactDetailsData}) {
  return (
    <div>
      {ContactDetailsData.map((item) => (
        <ContactDetails
          key={item.id}
          detail={item.detail}
          detailAddress={item.detailAddress}
          detailAddressIcon={item.detailAddressIcon}
          detailTitle={item.detailTitle}
          detailMessage1={item.detailMessage1}
          detailMessage2={item.detailMessage2}
          detailName={item.detailName}
          detailNameIcon={item.detailNameIcon}
          detail2={item.detail2}
          detail3={item.detail3}
          detailEmail={item.detailEmail}
          detailEmailIcon={item.detailEmailIcon}
          detail4={item.detail4}
          detailLinkdinIcon={item.detailLinkdinIcon}
          detailLinkdinUrl={item.detailLinkdinUrl}
          detail5={item.detail5}
          detailGithubIcon={item.detailGithubIcon}
          detailGithubUrl={item.detailGithubUrl}
          detail6={item.detail6}
          detailPhone={item.detailPhone}
          detailPhonePt={item.detailPhonePt}
          detailPhoneIcon={item.detailPhoneIcon}
        />
      ))}
    </div>
  );
}

ContactDetailsCard.propTypes = {
    ContactDetailsData: PropTypes.array.isRequired,
}
export default ContactDetailsCard;
