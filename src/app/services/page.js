import React from "react";
import ServicesThree from "../componants/services/ServicesThree";
import PageHeaderServices from "../componants/services/PageHeaderServices";
import ContactForm from "../componants/home/ContactForm";
import ServicesThreeNew from "../componants/services/ServicesThreeNew";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Services - Tzar Venture Online Digital Marketing Services - Tzar Venture",
  description: "Services - End to End Digital Marketing Services Online."
}


const Page = () => {
  return (
    <>
      <PageHeaderServices title="Services" />
      {/* <ServicesThree /> */}
      <ServicesThreeNew/>
      <ContactForm />
    </>
  );
};
export default Page;
