import PortfolioSection from "../PortfolioSection";
import {
  workProjects,
  collegeProjects,
} from "../../data/en/portfolio-section-en";

function PortfolioSectionEn() {
  return (
    <div>
      <PortfolioSection
        titleWork={"Some Of My Work"}
        titleCollege={"College Projects"}
        classCollege={"title"}
        classWork={"title"}
        workProjects={workProjects}
        collegeProjects={collegeProjects}
        buttonWork={"Whatch Online"}
        buttonCollege={"Repository"}
        watchLiveButton={"Wacth Online"}
      />
    </div>
  );
}
export default PortfolioSectionEn;
