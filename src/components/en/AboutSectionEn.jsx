import AboutSection from "../AboutSection";
import AboutDataEn from "../../data/en/about-section-en";

function AboutSectionEn() {
    return(
        <div>
        {AboutDataEn.map((item) => (
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
            />
        ))}
        </div>
    )
}

export default AboutSectionEn;