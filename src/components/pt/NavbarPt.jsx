import Navbar from "../ui/Navbar";
import navbarDataPt from "../../data/pt/navbar-pt";
function NavbarPt() {
  return (
    <>
      <Navbar 
      logoStart={"Port"}
      logoEnd={"fólio"}
      logoUrl={"/home-pt"}
      navbarData={navbarDataPt}
      />
    </>
  );
}

export default NavbarPt;