import Navbar from "../ui/Navbar";
import PropTypes from "prop-types";
import navbarDataPt from "../../data/pt/navbar-pt";
function NavbarPt({ thanksPage }) {
  return (
    <>
      <Navbar 
      logoStart={"Port"}
      logoEnd={"fólio"}
      logoUrl={"/home-pt"}
      navbarData={navbarDataPt}
      thanksPage={thanksPage}
      />
    </>
  );
}

NavbarPt.propTypes = {
  thanksPage: PropTypes.string.isRequired,
}

export default NavbarPt;