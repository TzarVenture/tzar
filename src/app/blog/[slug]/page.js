// app/blog/[id]/page.js
"use client";
import { useRouter } from 'next/router';
import { notFound } from 'next/navigation';

import blogdata from "@/app/data/blogdata";
import BlogDetailsPage from '@/app/componants/blog-details/BlogDetailsPage';

const BlogDetails = ({ params }) => {
  const { slug } = params;

  // Dummy blog data (would be fetched from an API or database in a real app)
  const blogs = [
    {
      id: 1,
      title: "Understanding Next.js",
      slug: "understanding-nextjs",
      content: "Next.js is a React framework that enables server-side rendering and static site generation. It is ideal for creating fast and SEO-friendly websites.",
      image: "/images/nextjs.png"
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      slug: "react-hooks-deep-dive",
      content: "React Hooks, such as useState and useEffect, enable you to use state and other React features without writing a class.",
      image: "/images/hooks.png"
    },
    {
      id: 3,
      title: "CSS-in-JS with Styled-Components",
      slug: "css-in-js-with-styled-components",
      content: "Styled-components allow you to write plain CSS in your JavaScript files, making it easier to style your components dynamically.",
      image: "/images/styled-components.png"
    },
  ];

  // Find the selected blog by slug
  const blog = blogs.find((blog) => blog.slug === slug);

  // If no blog is found, return a 404 page
  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogDetailsPage />
      {/* <div className="blog-details">
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} />
        <p>{blog.content}</p>
      </div> */}
    </>

  );
};

export default BlogDetails;