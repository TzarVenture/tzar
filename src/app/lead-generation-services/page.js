import React from "react";
import PageHeaderLeadG from "../componants/LeadGServices/PageHeaderLeadG";
import LeadGeneration from "../componants/LeadGServices/LeadGeneration";
import WhatWeDoLG from "../componants/LeadGServices/WhatWeDoLG";
import ImgTxtSecLG from "../componants/LeadGServices/ImgTxtSecLG";
import SomeFacts from "../componants/LeadGServices/SomeFacts";
import ContactForm from "../componants/home/ContactForm";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Lead Generation Services - Get 100% Qualified Leads for B2B and B2C Companies | Tzar Venture",
  description: "Lead Generation Services - Get 100% Qualified leads for B2B, B2C, Edu tech & Startups - Tzar Venture"
}


const Page = () => {
  return (
    <>
      <PageHeaderLeadG page="Lead Generation" title="Lead Generation" />
      <LeadGeneration />
      <WhatWeDoLG />
      {/* <ImgTxtSecLG />
      <SomeFacts /> */}
      <ContactForm />
    </>
  );
};
export default Page;
