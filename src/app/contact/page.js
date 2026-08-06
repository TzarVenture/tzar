import Location from "../componants/contact/Location";
import PageHeaderContact from "../componants/contact/PageHeaderContact";
import ContactFormSection from "../componants/home/ContactForm";

export const metadata = {
    title:"TZAR VENTURE- Digital Marketing Agency | Contact Us for Expert Digital Solutions",
    description:"Connect with Tzar Digital Agency's skilled team. Reach out through our Contact Us page for tailored digital services. Let's elevate your online presence together."
  }

export default function about() {
    return (
        <>
            <PageHeaderContact title="Contact Us"  />
            <Location/>
            <ContactFormSection/>
        </>
    )
}