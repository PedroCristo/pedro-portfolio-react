import Navbar from "../ui/Navbar";
import PropTypes from "prop-types";
import navbarDataEn from "../../data/en/navbar-en";

function NavbarEn({ thanksPage, errorPage404 }) {
  return (
      <Navbar 
      logoStart={"Port"}
      logoEnd={"folio"}
      logoUrl={"/"}
      navbarData={navbarDataEn}
      thanksPage={thanksPage}
      errorPage404={errorPage404}
      />
  );
}

NavbarEn.propTypes = {
  thanksPage: PropTypes.string.isRequired,
  errorPage404: PropTypes.string.isRequired,
};

export default NavbarEn;

