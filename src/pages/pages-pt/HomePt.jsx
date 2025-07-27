import NavbarPt from "../../components/pt/NavbarPt";
import HeroSectionPt from "../../components/pt/HeroSectionPt";
import AboutSectionPt from "../../components/pt/AboutSectionPt";
import ServicesSectionPt from "../../components/pt/ServicesSectionPt";
import SkillsSectionPt from "../../components/pt/SkillsSectionPt";
import FooterPt from "../../components/pt/FooterPt";
import ContactSectionPt from "../../components/pt/ContactSectionPt";
import PortfolioSectionPt from "../../components/pt/PortfolioSectionPt";

function HomePt() {
  return (
    <div>
      <NavbarPt />
      <HeroSectionPt />
      <AboutSectionPt />
      <ServicesSectionPt />
      <SkillsSectionPt />
      <PortfolioSectionPt />
      <ContactSectionPt title={"Contacto"} class={"title title-pt"} />
      <FooterPt/>
    </div>
  );
}

export default HomePt;
