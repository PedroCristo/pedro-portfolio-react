import { skillsArray } from "../../data/en/skills-section-en";

function SkillsProgressBar() {
  return (
    <>
      <div className="column right">
        {skillsArray.slice(0, 4).map((item) => (
          <div className="bars" key={item.id}>
            <div className="info">
              <span>{item.name}</span>
              <span>{item.percentage}</span>
            </div>
            <div className={`line ${item.progressSkill}`}></div>
          </div>
        ))}
      </div>
      <div className="column left left-bars-box">
        {skillsArray.slice(4).map((item) => (
          <div className="bars" key={item.id + 4}>
            <div className="info">
              <span>{item.name}</span>
              <span>{item.percentage}</span>
            </div>
            <div className={`line ${item.progressSkill}`}></div>
          </div>
        ))}
      </div>
    </>
  );
}
export default SkillsProgressBar;
