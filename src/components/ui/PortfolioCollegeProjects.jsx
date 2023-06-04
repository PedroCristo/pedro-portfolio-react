import PropTypes from "prop-types";

function PortfolioCollegesProjetsEn({ titleCollege, classCollege, collegeProjects, buttonCollege, watchLiveButton }) {
  return (
    <section id="work-section" className="work parallax-2">
      <div className="max-width">
        <h2 className={classCollege}>{titleCollege}</h2>
        <div className="carousel owl-carousel">
          {collegeProjects.map((project) => (
            <div className="card card-logo" key={project.id}>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="box">
                  <img src={project.projectImg} alt="College Project Image" />
                  <div className="live-demo-box">
                    <div className="live-demo">
                      <p>{watchLiveButton}</p>
                    </div>
                  </div>
                  <h2 className="text">{project.projectName}</h2>
                  <div className="box-icons">
                    {project.projectTechIcons.map((icon) => (
                      <i key={icon.id} className={icon}></i>
                    ))}
                    {project.projectTechImg &&
                      project.projectTechImg.length > 0 &&
                      project.projectTechImg.map((iconImg) => (
                        <img
                          key={iconImg.id}
                          src={iconImg}
                          className="icon-img"
                          alt="Project Tech Image"
                        />
                      ))}
                  </div>
                  <a
                    href={project.projectRepoUrl}
                    target="_blank"
                    className="btn-portfolio"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>{buttonCollege}
                  </a>
                </div>
              </a>
              <img
                src="images/portfolio/logos/code-institute-logo.png"
                className="logo-box"
                alt="Code Institute Logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

PortfolioCollegesProjetsEn.propTypes = {
  titleCollege: PropTypes.string.isRequired,
  classCollege: PropTypes.string.isRequired,
  collegeProjects: PropTypes.string.isRequired,
  buttonCollege: PropTypes.string.isRequired,
  watchLiveButton: PropTypes.string.isRequired,
};

export default PortfolioCollegesProjetsEn;
