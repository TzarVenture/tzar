import BlogOne from "../blog/BlogOne";
import BackgroundVideo from "./BackgroundVideo";
import ContactForm from "./ContactForm";
import CounterOne from "./CounterOne";
import CTAOne from "./CTAOne";
import DesignStudio from "./DesignStudio";
import ExeculsiveCardsR from "./ExeculsiveCardsR";
import MainHerobanner from "./MainHerobanner";
import OurServices from "./OurServices";
import SeoOurWebsite from "./SeoOurWebsite";
import StudioSection from "./StudioSection";
import TestimonialThree from "./Testimonial/TestimonialThree";
import WebDesignMock from "./WebDesignMock";
import WelcomeOne from "./WelCome";
import WhyChoose from "./WhyChoose";
import Domain from "./Domain";


export default function about() {
    return (
        <>
            <MainHerobanner/>
            {/* <BackgroundVideo/> */}
            <OurServices/>
            {/* <WelcomeOne/> */}
            {/* <DesignStudio/> */}
            <CounterOne/>
            <WebDesignMock/>
            {/* <WhyChoose/> */}
            <StudioSection/>
            <Domain/>
            {/* <ExeculsiveCardsR/> */}
            <TestimonialThree/>
            <CTAOne/>
            <ContactForm/>
            {/* <BlogOne/> */}
            <SeoOurWebsite/>
        </>
    )
}