import AboutSection from "../AboutSection";
import aboutDataPt from "../../data/pt/about-section-pt";

function AboutSectionPt() {
    return(
        <div>
        {aboutDataPt.map((item) => (
            <AboutSection 
             key={item.id}
             message1={item.message1}
             message2={item.message2}
             message3={item.message3}
             titleClass={item.titleClass}
             classname={item.classname}
             content={item.content}
             button={item.button}
             linkUrl={item.linkUrl}
             langPt={true}
            />
        ))}
        </div>
    )
}

export default AboutSectionPt;