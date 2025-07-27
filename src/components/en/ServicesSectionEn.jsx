import ServicesSection from "../ServicesSection";
import ServicesDataEn from "../../data/en/services-section-en";

function ServicesSectionEn() {
    return(
        <div>
            <ServicesSection 
            title={"My services"}
            classname={"title"}
            ServicesData={ServicesDataEn}
            />

        </div>
    )
}

export default ServicesSectionEn;