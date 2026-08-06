import React from "react";
import PageHeaderCK from "../componants/CloudKServices/PageHeaderCK";
import CloudKitchenMarketing from "../componants/CloudKServices/CloudKitchenMarketing";
import FactFollow from "../componants/CloudKServices/FactFollow";
import ContactForm from "../componants/home/ContactForm";
import BenefitsCKM from "../componants/CloudKServices/BenefitsCKM";

export const metadata = { 
  title:"TZAR VENTURE- Digital Marketing Agency: Boost Your Cloud Kitchen Success with Strategic Marketing",
  description:"Online cloud kitchen marketing Services will help you to grow brands, website tarffic & Sale through online digital marketing channels @ Tzar venture." 
}

const Page = () => {
  return (
    <>
    <PageHeaderCK title="cloud kitchen marketing" />
    <CloudKitchenMarketing/>
    <FactFollow/>
    <BenefitsCKM/>
    <ContactForm/>
    </>
  );
};
export default Page;
