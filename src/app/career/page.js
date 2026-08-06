
import Jobs from "../componants/Career/Jobs";
import JobTzar from "../componants/Career/JobTzar";
import PageHeaderCareer from "../componants/Career/PageHeaderCareer";
import ContactForm from "../componants/home/ContactForm";

import Link from "next/link";


export const metadata = {
    title:"TZAR VENTURE- Digital Marketing Agency :Explore Exciting Job Opportunities at Tzar Digital Agency - Join Our Team Today!",
    description:"Discover fulfilling career prospects at Tzar Digital Agency. We're hiring talented individuals for various roles. Elevate your career with us - apply now and be a part of our innovative team!" 
  }

export default function about() {
    return (
        <>
            <PageHeaderCareer title="Career"/>
            <Jobs/>
            <JobTzar/>
            {/* <ContactForm/> */}
        </>
    )
}