import PropTypes from "prop-types";

function Footer({ createdBy, copyRight }) {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <span>
         {createdBy}{" "}
          <a href="https://www.linkedin.com/in/pedro-cristo/" target="_blank" rel="noopener noreferrer">
            Pedro Cristo
          </a>
          <br />
          <span className="far fa-copyright"></span> {copyRight} | 2021
          - <span>{year}</span>
        </span>
      </footer>
    </div>
  )
}

Footer.prototype = {
  createdBy: PropTypes.string.isRequired,
  copyRight: PropTypes.string.isRequired,
}

export default Footer;
