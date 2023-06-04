import SkillsSection from "../SkillsSection";
import skillsDataPt from "../../data/pt/skills-section-pt";

function SkillsSectionPt() {
  return (
    <div>
      {skillsDataPt.map((item) => (
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
  );
}

export default SkillsSectionPt;
