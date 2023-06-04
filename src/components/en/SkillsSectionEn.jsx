import SkillsSection from "../SkillsSection";
import skillsDataEn from "../../data/en/skills-section-en";

function SkillsSectionEn() {
    return(
        <div>
            {skillsDataEn.map((item) => (
                <SkillsSection
                key={item.id}
                title={item.title}
                titleClass={item.titleClass}
                message1={item.message1}
                message2={item.message2}
                content={item.content}
                button={item.button}
                 />
    
            ))}
        </div>
    )
}

export default SkillsSectionEn;