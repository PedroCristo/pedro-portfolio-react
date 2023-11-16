import { skillsArray } from "../../data/en/skills-section-en";

function SkillsProgressBar() {
  const totalItems = skillsArray.length;
  const rightItems = Math.min(5, totalItems);
  const leftItems = Math.min(totalItems - rightItems, 5);

  return (
    <>
      <div className="column right">
        {skillsArray.slice(0, rightItems).map((item) => (
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
        {skillsArray.slice(rightItems, rightItems + leftItems).map((item) => (
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

  

