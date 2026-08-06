import React from "react";
import PageHeaderLogoD from "../componants/LogoDService/PageHeaderLogoD";

import ServicesDetails from "../componants/ServicesDetails/ServicesDetails";
import { logodesigngService } from "@/app/data/servicesDetails";
import LogoDesignMU from "../componants/LogoDService/LogoDesignMU";
import TestimonialThree from "../componants/home/Testimonial/TestimonialThree";
import ContactForm from "../componants/home/ContactForm";
import CountsLG from "../componants/LogoDService/Counts/CountsLG";
import WhyChooseUSLogo from "../componants/LogoDService/WhyChooseUSLogo";

export const metadata = {
  title:
    "TZAR VENTURE - Digital Marketing Agency Logo Design Services - Custom Logo Design. Business logos design by professionals online - Tzar venture",
  description:
    "Custom Logo Design Services Online - Tzar Venture do not sell products we make ICONIC Brands.",
};

const Page = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}> {/* ✅ Prevent horizontal scroll */}
        <PageHeaderLogoD
          parent="Services"
          title="LOGO DESIGNING"
          page="LOGO DESIGNING"
        />

        <div style={{ marginBottom: "60px" }}>
          <ServicesDetails service={logodesigngService} />
        </div>

        <div style={{ marginBottom: "60px" }}>
          <LogoDesignMU />
        </div>

        <div style={{ marginBottom: "60px" }}>
          <TestimonialThree />
        </div>

        <div style={{ marginBottom: "60px" }}>
          <WhyChooseUSLogo />
        </div>

        {/* Optional Counts Block */}
        {/* <div style={{ marginBottom: "60px" }}>
          <CountsLG />
        </div> */}

        <div style={{ marginBottom: "60px" }}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
