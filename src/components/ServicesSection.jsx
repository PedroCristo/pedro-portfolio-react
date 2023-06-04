import ServicesCard from "./ui/ServicesCard";
import PropTypes from "prop-types";

function ServicesSection({ classname, title, ServicesData }) {
  return (
    <section id="services-section" className="services parallax-2">
      <div className="max-width">
        <h2 className={classname}>{title}</h2>
        <div className="services-content">
          {ServicesData.map((item) => (
            <ServicesCard
              key={item.id}
              serviceIcon={item.serviceIcon}
              service={item.service}
              service1={item.service1}
              service2={item.service2}
              service3={item.service3}
              service1Img={item.service1Img}
              service2Img={item.service2Img}
              service3Img={item.service3Img}
              classMoving={`card-moving-${item.id}`} // Use a unique class name for each card
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ServicesSection.propTypes = {
    classname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ServicesData: PropTypes.string.isRequired,

}

export default ServicesSection;
