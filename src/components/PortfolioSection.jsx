import { useEffect } from "react";
import PortfolioWorkProjectsEn from "./ui/PortfolioWorkProjects";
import PortfolioCollegesProjetsEn from "./ui/PortfolioCollegeProjects";
import PropTypes from "prop-types";

function PortfolioSection({
  titleCollege,
  classCollege,
  titleWork,
  classWork,
  workProjects,
  collegeProjects,
  buttonWork,
  buttonCollege,
  langPt,
  watchLiveButton
}) {
  useEffect(() => {
    $(".carousel").each(function (index) {
      const rtlConfig = index === 0 ? { rtl: true } : {}; // Apply rtl: true to the second carousel only
  
      $(this).owlCarousel({
        margin: 20,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
          },
        },
        ...rtlConfig, // Spread the rtlConfig object to include rtl: true if it's the second carousel
      });
    });
  }, []);
  

  return (
    <>
      <PortfolioWorkProjectsEn
        titleWork={titleWork}
        classWork={classWork}
        workProjects={workProjects}
        buttonWork={buttonWork}
        langPt={langPt}
      />
      <PortfolioCollegesProjetsEn
        titleCollege={titleCollege}
        classCollege={classCollege}
        collegeProjects={collegeProjects}
        buttonCollege={buttonCollege}
        watchLiveButton={watchLiveButton}
      />
    </>
  );
}

PortfolioSection.propTypes = {
  titleCollege: PropTypes.string.isRequired,
  titleWork: PropTypes.string.isRequired,
  classWork: PropTypes.string.isRequired,
  classCollege: PropTypes.string.isRequired,
  workProjects: PropTypes.array.isRequired,
  collegeProjects: PropTypes.array.isRequired,
  buttonWork: PropTypes.string.isRequired,
  buttonCollege: PropTypes.string.isRequired,
  langPt: PropTypes.bool,
  watchLiveButton: PropTypes.string.isRequired,
};

export default PortfolioSection;
