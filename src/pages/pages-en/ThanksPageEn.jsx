import ThanksPage from "../../components/ThanksPage";
import NavbarEn from "../../components/en/NavbarEn";
import FooterEn from "../../components/en/FooterEn";

function ThanksPageEn() {
  return (
    <div>
      <NavbarEn thanksPage={true} />
      <ThanksPage button={"Go Back"} buttonUrl={"/"}/>
      <FooterEn />
    </div>
  );
}

export default ThanksPageEn;
