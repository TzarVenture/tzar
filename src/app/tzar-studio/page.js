import React from "react";
import BStudioSlider from "../componants/TzarStudio/BStudioSlider";
import StudioShowcase from "../componants/TzarStudio/StudioShowcase";
import StudioClients from "../componants/TzarStudio/StudioClients";
import FoodShoot from "../componants/TzarStudio/FoodShoot";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Studio Services - Custom Logo Design. Business logos design by professionls online - Tzar venture",
  description: "Custom Studio Services Online - Tzar Venture do not sell products we make ICONIC Brands. "
}

const Page = () => {
  return (
    <>
      <BStudioSlider page="Tzar Studio" title="Our Studio" />
      <StudioShowcase />
      <StudioClients />
      <FoodShoot />
    </>
  );
};
export default Page;
