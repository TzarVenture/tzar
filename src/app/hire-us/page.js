
import JobTzar from "../componants/Career/JobTzar";
import PageHeaderInternship from "../componants/Internship/PageHeaderInternship";
import ContactForm from "../componants/home/ContactForm";
import Internship from "../componants/Internship/Internship";
import PopupHireUs from "../componants/home/PopupHireUs";
import ServicesAndProcess from "../componants/HireUs/ServicesAndProcess";





export const metadata = {
    title:"TZAR VENTURE- Digital Marketing Agency Hire Us: Unlock Your Potential with Tzar",
    description:"Explore exciting internship opportunities at Tzar Digital Agency. Join our dynamic team, gain hands-on experience, and shape your future in the world of digital marketing. Discover growth at Tzar, where innovation meets expertise." 
  }

export default function hireus() {
    return (
        <>
            <PageHeaderInternship title="Hire Us"/>  
             <ServicesAndProcess />
            <ContactForm />
            {/* <PopupHireUs/> */}
        </>
    )
}