import HeroSection from "../HeroSection";
import HeroDataPt from "../../data/pt/hero-section-pt";

function HeroSectionPt() {
    return (
      <div>
        {HeroDataPt.map((item) => (
          <HeroSection
            key={item.id}
            message1={item.message1}
            name={item.name}
            message2={item.message2}
            classname={item.classname}
            button={item.button}
            langPt={true}
          />
        ))}
      </div>
    );
  }
  
  export default HeroSectionPt;