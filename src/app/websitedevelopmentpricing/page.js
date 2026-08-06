import React from "react";
import ContactFormWeb from "../componants/home/ContactFormWeb";
import WebPricing from "../componants/WebsitePricing/WebPricing";
import ShowcaseSlider from "../componants/WebsitePricing/ShowcaseSlider";

export const metadata = {
    title: "TZAR VENTURE- Digital Marketing Agency Website Development Services  - Custom Website Development Services Online @ Tzar venture",
    description: "Website Development Services  -  Responsive custom website development service provider at Tzar venture."
}

const Page = () => {
    return (
        <>
            <WebPricing />
            <ShowcaseSlider/>
            <ContactFormWeb />
        </>
    );
};
export default Page;
