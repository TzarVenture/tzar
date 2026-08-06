import React from "react";
import PageHeaderPPD from "../componants/productDservices/PageHeaderPPD";
import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { LeadGenerationService2 } from "@/app/data/servicesDetails";
import PackagingDesignServ from "../componants/productDservices/PackagingDesignServ";
import SomeFacts from "../componants/LeadGServices/SomeFacts";
import CountsLG from "../componants/LogoDService/Counts/CountsLG";
import ContactForm from "../componants/home/ContactForm";
import HeroSec from "../componants/productDservices/HeroSec";

export const metadata = { 
  title:"TZAR VENTURE- Digital Marketing Agency: Expert In Product Packaging Design Services",
    description:"Tzar Digital's packaging design services elevate your brand. Specialists create compelling, customized packaging boosting visibility and differentiation. Complimentary consultations discuss first impressions and solutions tailored to your business goals."
}


const Page = () => {
  return (
    <>
    <PageHeaderPPD title="PRODUCT DESIGN PACKAGING SERVICE"/>
    {/* <ServicesDetails service={LeadGenerationService2} /> */}
    <HeroSec/>
    <PackagingDesignServ/>
    {/* <SomeFacts/>
    <CountsLG/> */}
    <ContactForm/>
    </>
  );
};
export default Page;
