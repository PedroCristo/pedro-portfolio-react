import ThanksPage from "../../components/ThanksPage";
import NavbarPt from "../../components/pt/NavbarPt";
import FooterPt from "../../components/pt/FooterPt";

function ThanksPageEn() {
  return (
    <div>
      <NavbarPt thanksPage={true} />
      <ThanksPage button={"Voltar"} buttonUrl={"/home-pt"} langPt={true} />
      <FooterPt />
    </div>
  );
}

export default ThanksPageEn;