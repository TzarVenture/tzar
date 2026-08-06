import React from "react";
import ProtfoiloGalleryTab from "../componants/PortfolioPG/ProtfoiloGalleryTab";
import PageHeaderportfolio from "../componants/PortfolioPG/PageHeaderportfolio";

export const metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency | Expert Solutions for Creative Web Design & Digital Marketing",
  description: "Browse Tzar Digital's portfolio featuring cutting-edge websites and impactful campaigns. Boost your online brand with our strategic and creative expertise. Reach out to discuss customized plans proven to engage customers, increase sales and take your business to new heights."
}

const Page = () => {
  return (
    <>
      <PageHeaderportfolio page="Portfolio" title="Portfolio" />
      <ProtfoiloGalleryTab />
    </>
  );
};
export default Page;
