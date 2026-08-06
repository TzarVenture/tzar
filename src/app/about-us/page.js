import AboutPage from "../componants/aboutus/AboutMain";
import PageHeaderAbout from "../componants/aboutus/PageHeaderAbout";
import TeamRA from "../componants/aboutus/TeamRA";
import ContactForm from "../componants/home/ContactForm";

import Link from "next/link";

export const metadata = {
    title: "TZAR VENTURE- Digital Marketing Agency About Us - Tzar Venture Online Digital Marketing Services - Tzar Venture",
    description: "About Us - End to End Digital Marketing Services Online."
}

export default function about() {
    return (
        <>
            <PageHeaderAbout title="About Us" />
            <AboutPage />
            <TeamRA />
            <Link href="/our-team">
                <span className="thm-btn abut-page__btnout">Discover Our Team</span>
            </Link>
            <ContactForm />
        </>
    )
}