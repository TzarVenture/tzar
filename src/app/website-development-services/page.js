import React from "react";
import PageHeaderWebsiteD from "../componants/website-dev-services/PageHeaderWebsiteD";
import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { websiteDevelopmentService } from "@/app/data/servicesDetails";
import WebsiteDesignCardsR from "../componants/website-dev-services/WebsiteDesignCardsR";
import TestimonialFour from "../componants/website-dev-services/TestimonialFour";
import TestimonialFive from "../componants/website-dev-services/TestimonialFive";
import BenefitsWD from "../componants/website-dev-services/BenefitsWD";
import ContactForm from "../componants/home/ContactForm";
import WdService from "../componants/website-dev-services/WdService";
import WebDesignMock from "../componants/home/WebDesignMock";
import WebdevHerrobanner from "../componants/website-dev-services/Web-devHerrobanner";
import WebsiteShow from "../componants/website-dev-services/WebsiteShow";
import WebdevContact from "../componants/contact/WebDevContact";
import WebDevPacks from "../componants/website-dev-services/WebDevPacks";
import ContactFormWeb from "../componants/home/ContactFormWeb";
import OurIndustryExpertise from "../componants/website-dev-services/OurIndustryExpertise";
import FaqWebdev from "../componants/website-dev-services/faq/FaqWebdev";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Website Development Services  - Custom Website Development Services Online @ Tzar venture",
  description: "Website Development Services  -  Responsive custom website development service provider at Tzar venture."
}

const Page = () => {
  return (
    <>
      <WebdevHerrobanner />
      {/* <PageHeaderWebsiteD
        parent="Services"
        title="Website Development"
        page="Website Development"
      /> */}
      {/* <ServicesDetails service={websiteDevelopmentService} /> */}
      <WebDevPacks />
      <WebsiteShow />
      <WebsiteDesignCardsR />
      <OurIndustryExpertise />
      {/* <TestimonialFour /> */}
      <WebDesignMock />
      <TestimonialFive />
      <ContactFormWeb />
      <WdService />
      {/* <FaqWebdev /> */}
    </>
  );
};
export default Page;
