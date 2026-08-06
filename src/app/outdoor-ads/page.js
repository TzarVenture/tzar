import React from "react";
// import AdsServices from "../components/OutdoorAdsPG/AdsServices";
// import PrimeClients from "../components/OutdoorAdsPG/PrimeClients";
// import AdsSingup from "../components/OutdoorAdsPG/AdsSingup";
import OutdoorHeader from "../componants/OutdoorAds/OutdoorHeader";
import AdsServices from "../componants/OutdoorAds/AdsServices";
import AdsSingup from "../componants/OutdoorAds/AdsSingup";
import PrimeClients from "../componants/OutdoorAds/PrimeClients";

export const metadata = { 
  title:"TZAR VENTURE- Digital Marketing Agency Outdoor ads Services - Custom Logo Design. Business logos design by professionls online - Tzar venture",
  description:"Outdoor ads - Tzar Venture do not sell products we make ICONIC Brands. " 
}

const Outdoorads = ()=> {
  return (
    <>
    <OutdoorHeader/>
    <AdsServices/>
    <AdsSingup/>
    <PrimeClients/>
    </>
  );
};
export default Outdoorads;
