import Navbar from "../ui/Navbar";
import navbarDataEn from "../../data/en/navbar-en";
function NavbarEn() {
  return (
    <>
      <Navbar 
      logoStart={"Port"}
      logoEnd={"folio"}
      logoUrl={"/"}
      navbarData={navbarDataEn}
      currentPage={"thanksPage"}
      />
    </>
  );
}

export default NavbarEn;
