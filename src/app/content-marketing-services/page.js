import React from "react";
import PageHeaderCmm from "../componants/CMMservices/PageHeaderCmm";
import ContentMarketing from "../componants/CMMservices/ContentMarketing";
import ContentmarketingcardsR from "../componants/CMMservices/ContentmarketingcardsR";
import WhyusCM from "../componants/CMMservices/WhyusCM";
import ContactForm from "../componants/home/ContactForm";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Content Marketing Services Online  - To Grow Traffic & Sales Online | Tzar Venture",
  description: "Online Content Marketing Services will help you to grow brands, website tarffic & Sale through online digital marketing channels @ Tzar venture."
}

const Page = () => {
  return (
    <>
      <PageHeaderCmm title="content Marketing" />
      <ContentMarketing />
      <ContentmarketingcardsR />
      {/* <WhyusCM/> */}
      <ContactForm />
    </>
  );
};
export default Page;
