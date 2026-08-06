import React from "react";
import PageHeaderSeo from "../componants/SEOServices/PageHeaderSeo";
import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { LeadGenerationService1 } from "@/app/data/servicesDetails";
import SeoServiceCards from "../componants/SEOServices/SeoServiceCards";
import ImgTxtSecSeo from "../componants/SEOServices/ImgTxtSecSeo";
import BenefitsSEO from "../componants/SEOServices/BenefitsSEO";
import CTATwoSeo from "../componants/SEOServices/CTAOneSeo";
import WhatWeDoLG from "../componants/SEOServices/WhatWeDoSEO";
import SeoServices from "../componants/SEOServices/SeoServices";
import ContactForm from "../componants/home/ContactForm";
import SeoHerrobanner from "../componants/SEOServices/SeoHerrobanner";
import SeoJournery from "../componants/SEOServices/SeoJourney";
import ThreeCardseo from "../componants/SEOServices/ThreeCardseo";
import TestimonialThreeSeo from "../componants/home/Testimonial/TestimonialThreeSeo";
import SEOPackages from "../componants/SEOServices/SEOPackages";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Search Engine Optimization - SEO Services Online, SEO On page & SEO Off page Optimization, SEO Agency in India. | Tzar Venture",
  description: "SEO Agency - 100% Guaranteed Result in 6 Month. Grow Organic Traffic online through On page and Off page Search Engine Optimization technique. | Tzar Venture"
}

const Page = () => {
  return (
    <>
      <SeoHerrobanner />
      {/* <PageHeaderSeo page="Search Engine Optimization" title="Search Engine Optimization" />
      <ServicesDetails service={LeadGenerationService1} /> */}
      <SeoJournery/>
      <ThreeCardseo/>
      <SEOPackages/>
      <TestimonialThreeSeo/>
      {/* <SeoServiceCards /> */}
      {/* <ImgTxtSecSeo /> */}
      {/* <BenefitsSEO /> */}
      {/* <CTATwoSeo /> */}
      {/* <WhatWeDoLG /> */}
      <ContactForm />
      <SeoServices />
    </>
  );
};
export default Page;
