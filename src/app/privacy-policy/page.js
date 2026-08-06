

import React from "react";
import PageHeaderPrivacyPolicy from "@/app/componants/TermsConditions/PageHeaderPrivacyPolicy";
import Privacypolicy from "@/app/componants/TermsConditions/Privacypolicy";


export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Social media marketing services | Tzar Digital Marketing Agency in Mumbai",
  description: "Tzar Digital Marketing Agency",
}



const Page = () => {
  return (
    <>
      <PageHeaderPrivacyPolicy page="privacy policy" title="privacy policy" />
      <Privacypolicy />
    </>
  );
};

export default Page;
