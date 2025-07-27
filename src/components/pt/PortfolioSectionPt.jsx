import PortfolioSection from "../PortfolioSection";
import {
  workProjects,
  collegeProjects,
} from "../../data/en/portfolio-section-en";

function PortfolioSectionPt() {
  return (
    <div>
      <PortfolioSection
        titleWork={"Alguns dos meus projectos"}
        titleCollege={"Projectos do Curso"}
        classCollege={"title title-pt"}
        classWork={"title title-pt"}
        workProjects={workProjects}
        collegeProjects={collegeProjects}
        buttonWork={"Veja Online"}
        buttonCollege={"Repositório"}
        langPt={true}
        watchLiveButton={"Veja Online"}
      />
    </div>
  );
}
export default PortfolioSectionPt;
