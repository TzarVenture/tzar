import React from "react";
import PageHeaderSmm from "../componants/SMMservices/PageHeaderSmm";
import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { socialMarketingService } from "@/app/data/servicesDetails";
import SocialMediaMktcardsR from "../componants/SMMservices/SocialMediaMktcardsR ";
import BenefitsSMM from "../componants/SMMservices/BenefitsSMM";
import TestimonialThree from "../componants/home/Testimonial/TestimonialThree";
import ContactForm from "../componants/home/ContactForm";
import SmmService from "../componants/SMMservices/SmmService";

export const metadata = {
  title:"TZAR VENTURE- Digital Marketing Agency Social Media Marketing Services - Upscale your Brand & Sale with Social Media Marketing Service | Tzar Venture",
    description:"Social Media Paid Marketing Services - Social Media Ad Agency for celebrities, B2B, B2C, EduTect, Ecommerce, Politicians Online. | Tzar Venture"
}


const Page = () => {
  return (
    <>
      <PageHeaderSmm parent="Services"
        title="Social Marketing"
        page="Service Details" />

      <ServicesDetails service={socialMarketingService} />
      <SocialMediaMktcardsR />
      <BenefitsSMM />
      <TestimonialThree />
      <ContactForm />
      <SmmService/>
    </>
  );
};
export default Page;
