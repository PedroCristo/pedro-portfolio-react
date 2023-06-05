import Navbar from "../ui/Navbar";
import PropTypes from "prop-types";
import navbarDataEn from "../../data/en/navbar-en";

function NavbarEn({ thanksPage }) {
  return (
    <>
      <Navbar 
      logoStart={"Port"}
      logoEnd={"folio"}
      logoUrl={"/"}
      navbarData={navbarDataEn}
      thanksPage={thanksPage}
      />
    </>
  );
}

NavbarEn.propTypes = {
  thanksPage: PropTypes.string.isRequired,
};

export default NavbarEn;

