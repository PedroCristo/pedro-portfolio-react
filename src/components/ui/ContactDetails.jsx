import PropTypes from "prop-types";

function ContactDetails({
  detailTitle,
  detailMessage1,
  detailMessage2,
  detail,
  detailName,
  detailNameIcon,
  detail2,
  detailAddress,
  detailAddressIcon,
  detail3,
  detailEmail,
  detailEmailIcon,
  detail4,
  detailLinkdinIcon,
  detailLinkdinUrl,
  detail5,
  detailGithubIcon,
  detailGithubUrl,
  detail6,
  detailPhone,
  detailPhoneIcon,
}) {
  return (
    <>
      <h2 className="text">{detailTitle}</h2>
      <div className="text-colored">{detailMessage1}</div>
      <p>{detailMessage2}</p>
      <div className="icons">
        <div className="row">
          <i className={detailNameIcon}></i>
          <div className="info">
            <div className="head">{detail}</div>
            <div className="sub-title">{detailName}</div>
          </div>
        </div>
        <div className="row">
          <i className={detailAddressIcon}></i>
          <div className="info">
            <p className="head">{detail2}</p>
            <p className="sub-title">{detailAddress}</p>
          </div>
        </div>
        <div className="row">
          <i className={detailEmailIcon}></i>
          <div className="info">
            <p className="head">{detail3}</p>
            <p className="sub-title">{detailEmail}</p>
          </div>
        </div>
        <a href="tel: +353899596466">
          <div className="row row-contact">
            <i className={detailPhoneIcon}></i>
            <div className="info">
              <p className="head">{detail6}</p>
              <p className="sub-title">{detailPhone}</p>
            </div>
          </div>
        </a>
        <a href={detailLinkdinUrl} target="_blank" rel="noopener noreferrer">
          <div className="row">
            <i className={detailLinkdinIcon}></i>
            <div className="info">
              <p className="head">{detail4}</p>
            </div>
          </div>
        </a>
      </div>
      <a href={detailGithubUrl} target="_blank" rel="noopener noreferrer">
        <div className="row">
          <i className={detailGithubIcon}></i>
          <div className="info">
            <p className="head">{detail5}</p>
          </div>
        </div>
      </a>
    </>
  );
}

ContactDetails.propTypes = {
  id: PropTypes.number,
  detailTitle: PropTypes.string.isRequired,
  detailMessage1: PropTypes.string.isRequired,
  detailMessage2: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  detailName: PropTypes.string.isRequired,
  detailNameIcon: PropTypes.string.isRequired,
  detail2: PropTypes.string.isRequired,
  detailAddress: PropTypes.string.isRequired,
  detailAddressIcon: PropTypes.string.isRequired,
  detail3: PropTypes.string.isRequired,
  detailEmail: PropTypes.string.isRequired,
  detailEmailIcon: PropTypes.string.isRequired,
  detail4: PropTypes.string.isRequired,
  detailLinkdinIcon: PropTypes.string.isRequired,
  detailLinkdinUrl: PropTypes.string.isRequired,
  detail5: PropTypes.string.isRequired,
  detailGithubIcon: PropTypes.string.isRequired,
  detailGithubUrl: PropTypes.string.isRequired,
  detail6: PropTypes.string.isRequired,
  detailPhone: PropTypes.string.isRequired,
  detailPhoneIcon: PropTypes.string.isRequired,
};

export default ContactDetails;
