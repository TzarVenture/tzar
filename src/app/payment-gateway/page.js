import React from "react";
import PageHeaderPPC from "../componants/payperclickservice/PageHeaderPPC";
import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { PayPerClickService } from "@/app/data/servicesDetails";
import PayperClickMgmt from "../componants/payperclickservice/PayperClickMgmt";
import PayperClickmgmtS from "../componants/payperclickservice/PayperClickmgmtS";
import BenefitsPPC from "../componants/payperclickservice/BenefitsPPC";
import TestimonialThree from "../componants/home/Testimonial/TestimonialThree";
import ContactForm from "../componants/home/ContactForm";
import PaymentSection from "../componants/PaymentGateway/PaymentSection";

export const metadata = {
   title:"TZAR VENTURE- Digital Marketing Agency Pay Per Click Management Services - Online Pay Per Click Management Services to boost sales. | Tzar Venture",
    description:"Payment Gatway Services Online - Pay per click marketing is a paid search model used to build brand awareness, promote brand offerings throung  text ads, display ads, youtube ads and gain immediate traction from specific audience. Tzar venture."
}


const Page = () => {
  return (
    <>
      <PaymentSection/>
    </>
  );
};
export default Page;
