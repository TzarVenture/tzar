
import BlogDetailsPage from "../componants/blog-details-old/BlogDetailsPage";
import PageHeaderBlog from "../componants/blog/PageHeaderBlog";
import React from "react";

export const metadata = {
    title: "TZAR VENTURE- Boost Your Online Brand with Strategic Blog Marketing",
    description: "Discover our blog for exclusive tips on digital marketing, SEO, design strategies and industry trends. Gain the competitive edge with our expert advice on boosting your online visibility and sales. Let our team elevate your brand through customized solutions informed by data and creativity."
}

const Page = () => {
    return (
        <>
            <PageHeaderBlog page="Blog Details" title="Blog Details" />
            <BlogDetailsPage/>
        </>

    );
};

export default Page;
