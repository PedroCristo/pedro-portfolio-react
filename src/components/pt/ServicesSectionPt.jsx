import ServicesSection from "../ServicesSection";
import ServicesDataPt from "../../data/pt/services-section-pt";

function ServicesSectionPt() {
    return(
        <div>
            <ServicesSection 
            title={"Serviços"}
            classname={"title title-pt"}
            ServicesData={ServicesDataPt}
            />

        </div>
    )
}

export default ServicesSectionPt;