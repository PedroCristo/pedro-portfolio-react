import HeroSection from "../HeroSection";
import HeroDataEn from "../../data/en/hero-section-en";

function HeroSectionEn() {
  return (
    <div>
      {HeroDataEn.map((item) => (
        <HeroSection
          key={item.id}
          message1={item.message1}
          name={item.name}
          message2={item.message2}
          classname={item.classname}
          button={item.button}
        />
      ))}
    </div>
  );
}

export default HeroSectionEn;
