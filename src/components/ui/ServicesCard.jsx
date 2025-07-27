import { useEffect } from "react";
import PropTypes from "prop-types";
import VanillaTilt from "vanilla-tilt";

function ServicesCard({
  serviceIcon,
  service,
  service1,
  service1Img,
  service2,
  service2Img,
  service3,
  service3Img,
  classMoving,
}) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${classMoving}`);
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    function handleResize() {
      if (mediaQuery.matches) {
        elements.forEach((element) => {
          element.classList.remove("card-moving");
          VanillaTilt.init(element, {
            max: 20,
            speed: 500,
          });
        });
      } else {
        elements.forEach((element) => {
          element.classList.add("card-moving");
          VanillaTilt.init(element, {
            max: 20,
            speed: 500,
          });
        });
      }
    }

    handleResize(); // Call initially

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [classMoving]);

  return (
    <div className={`card ${classMoving}`}>
      <div className="box">
        <i className={serviceIcon}></i>
        <h3 className="text">{service}</h3>
        <hr />
        <div className="services-content-box">
          <img src={service1Img} alt="ICON IMG" />
          <p>{service1}</p>
        </div>
        <div className="services-content-box">
          <img src={service2Img} alt="ICON IMG" />
          <p>{service2}</p>
        </div>
        <div className="services-content-box">
          <img src={service3Img} alt="ICON IMG" />
          <p>{service3}</p>
        </div>
      </div>
    </div>
  );
}

ServicesCard.propTypes = {
  serviceIcon: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  service1: PropTypes.string.isRequired,
  service1Img: PropTypes.string.isRequired,
  service2: PropTypes.string.isRequired,
  service2Img: PropTypes.string.isRequired,
  service3: PropTypes.string.isRequired,
  service3Img: PropTypes.string.isRequired,
  classMoving: PropTypes.string.isRequired,
};

export default ServicesCard;


