

import BlogCards from "../componants/blog/BlogCards";
import BlogPage from "../componants/blog/BlogPage";
import PageHeaderBlog from "../componants/blog/PageHeaderBlog";
import ContactForm from "../componants/home/ContactForm";

export const metadata = {
    title: "TZAR VENTURE- Boost Your Online Brand with Strategic Blog Marketing",
    description: "Discover our blog for exclusive tips on digital marketing, SEO, design strategies and industry trends. Gain the competitive edge with our expert advice on boosting your online visibility and sales. Let our team elevate your brand through customized solutions informed by data and creativity."
}

export default function blog() {
    return (
        <>
            <PageHeaderBlog title="Blogs" />
            {/* <BlogPage/> */}
            <BlogCards/>
            <ContactForm />
        </>
    )
}