import PropTypes from "prop-types";

function PortfolioCollegesProjetsEn({
  titleCollege,
  classCollege,
  collegeProjects,
  buttonCollege,
  watchLiveButton,
}) {
  return (
    <section id="work-section" className="work parallax-2">
      <div className="max-width">
        <h2 className={classCollege}>{titleCollege}</h2>

        <div className="carousel owl-carousel">
          {collegeProjects.map((project) => {
            console.log("Rendering project:", project.id, project.projectName);

            return (
              <div className="card card-logo" key={project.id}>
                {/* ✅ MAIN link for the project */}
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="box">
                    <img src={project.projectImg} alt="College Project" />

                    <div className="live-demo-box">
                      <div className="live-demo">
                        <p>{watchLiveButton}</p>
                      </div>
                    </div>

                    <h2 className="text">{project.projectName}</h2>

                    {/* ✅ Tech icons */}
                    <div className="box-icons">
                      {project.projectTechIcons.map((icon) => (
                        <i key={icon.id} className={icon.iconClass}></i>
                      ))}
                      {project.projectTechImg?.map((iconImg) => (
                        <img
                          key={iconImg.id}
                          src={iconImg.imgSrc}
                          className="icon-img"
                          alt="Project Tech"
                        />
                      ))}
                    </div>
                  </div>
                </a>

                {/* ✅ Harvard / Code Institute logo selection */}
                <div className="project-item">
                  <img
                    src={
                      project.id === 4
                        ? "images/portfolio/logos/Harvard_University_coat_of_arms150px.png"
                        : "images/portfolio/logos/code-institute-logo.png"
                    }
                    className="logo-box"
                    alt={
                      project.id === 4
                        ? "Harvard University Logo"
                        : "Code Institute Logo"
                    }
                  />
                </div>
                <br />

                {/* ✅ Separate GitHub repo link (not nested inside the main <a>) */}
                <a
                  href={project.projectRepoUrl}
                  target="_blank"
                  className="btn-portfolio"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> {buttonCollege}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

PortfolioCollegesProjetsEn.propTypes = {
  titleCollege: PropTypes.string.isRequired,
  classCollege: PropTypes.string.isRequired,
  collegeProjects: PropTypes.array.isRequired,
  buttonCollege: PropTypes.string.isRequired,
  watchLiveButton: PropTypes.string.isRequired,
};

export default PortfolioCollegesProjetsEn;
