import PropTypes from "prop-types";

function PortfolioWorkProjectsEn({
  titleWork,
  classWork,
  workProjects,
  buttonWork,
  langPt,
}) {
  return (
    <section id="work-section" className="work parallax-2">
      <div className="max-width">
        <h2 className={classWork}>{titleWork}</h2>
        <div className="carousel owl-carousel">
          {workProjects.map((project) => (
            <div
              className={`card ${project.id === 8 ? "card-logo" : null}`}
              key={project.id}
            >
              <a
                href={project.projectName === 9 ? "/" : project.projectUrl}
                target={project.id === 9 ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                <div className="box">
                  <img src={project.projectImg} alt={project.projectName} />
                  <h2 className="text">
                    {langPt === true && project.id === 1
                      ? `Restaurante Nortada`
                      : `${project.projectName}`}
                  </h2>
                  <div className="box-icons">
                    {project.projectTechImg &&
                      project.projectTechImg.length > 0 &&
                      project.projectTechImg.map((iconImg) => (
                        <img
                          key={iconImg.id}
                          src={iconImg.imgSrc}
                          className="icon-img"
                          alt="Project Tech Image"
                        />
                      ))}
                    {project.projectTechIcons.map((icon) => (
                      <i key={icon.id} className={icon.iconClass}></i>
                    ))}
                  </div>
                  {project.id === 9 ? (
                    <h5 className="btn-portfolio interactive-color-bg">
                      {project.id === 9 && langPt === true
                        ? "Versão Live"
                        : "Live Version"}
                    </h5>
                  ) : (
                    <h5 className="btn-portfolio">{buttonWork}</h5>
                  )}
                </div>
                {/* {project.id === 8 ? (
                  <img
                    src="images/portfolio/logos/zarco_logo.png"
                    alt="LOGO IMG"
                    className="logo-box"
                  />
                ) : null} */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

PortfolioWorkProjectsEn.propTypes = {
  titleWork: PropTypes.string.isRequired,
  classWork: PropTypes.string.isRequired,
  workProjects: PropTypes.array.isRequired,
  buttonWork: PropTypes.string.isRequired,
  langPt: PropTypes.bool,
};

export default PortfolioWorkProjectsEn;
