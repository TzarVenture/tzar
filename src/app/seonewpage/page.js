import React from "react";
import SeoHerrobanner from "../componants/SEOServices/SeoHerrobanner";
import SeoJournery from "../componants/SEOServices/SeoJourney";
import ThreeCardseo from "../componants/SEOServices/ThreeCardseo";


export const metadata = {
  title: "Seo - Tzar Venture Online Digital Marketing Services - Tzar Venture",
  description: "Seo - End to End Digital Marketing Services Online."
}


const Page = () => {
  return (
    <>
      <SeoHerrobanner/>
      <SeoJournery/>
      <ThreeCardseo/>
    </>
  );
};
export default Page;
