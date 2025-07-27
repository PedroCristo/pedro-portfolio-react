import HeroSectionEn from "../../components/en/HeroSectionEn";
import AboutSectionEn from "../../components/en/AboutSectionEn";
import ServicesSectionEn from "../../components/en/ServicesSectionEn";
import SkillsSectionEn from "../../components/en/SkillsSectionEn";
import PortfolioSectionEn from "../../components/en/PortfolioSectionEn";
import ContactSectionEn from "../../components/en/ContactSectionEn";
import NavbarEn from "../../components/en/NavbarEn";
import FooterEn from "../../components/en/FooterEn";


function HomeEn() {
  return (
    <div>
      <NavbarEn />
      <HeroSectionEn />
      <AboutSectionEn />
      <ServicesSectionEn />
      <SkillsSectionEn />
      <PortfolioSectionEn />
      <ContactSectionEn title={"Message me"} class={"title"} />
      <FooterEn />
    </div>
  );
}

export default HomeEn;
