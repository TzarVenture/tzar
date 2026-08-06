import React from "react";
import FaqPage from "../componants/faqs/FaqPage";
import CTAOne from "../componants/home/CTAOne";
import PageHeaderFAQ from "../componants/faqs/PageHeaderFAQ";
import ContactForm from "../componants/home/ContactForm";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency FAQs - Custom Logo Design. Business logos design by professionls online - Tzar venture",
  description: "Custom Services Online FAQs - Tzar Venture do not sell products we make ICONIC Brands. "
}

const Page = () => {
  return (
    <>
      <PageHeaderFAQ title="FAQs" />
      <FaqPage />
      <ContactForm />
      <CTAOne />
    </>
  );
};
export default Page;
