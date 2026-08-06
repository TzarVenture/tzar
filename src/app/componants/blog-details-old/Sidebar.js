import { blogSidebar } from "@/app/data/blogSidebarPage";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { posts, categories, tags, comments } = blogSidebar;

const Sidebar = () => {
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   console.log(formData.get("search"));
  // };

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        {/* <form onSubmit={handleSearch} className="sidebar__search-form">
          <input type="search" placeholder="Search here" name="search" />
          <button type="submit">
            <i className="icon-magnifying-glass"></i>
          </button>
        </form> */}
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Latest Posts</h3>
        <ul className="sidebar__post-list list-unstyled">
          {posts.map(({ id, title, image, comments }) => (
            <li key={id}>
              <div className="sidebar__post-image">
                <Image
                  src={require(`@/assets/images/blog/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <Link href="#" className="sidebar__post-content-meta">
                    <i className="far fa-comments"></i>
                    {comments} Comments
                  </Link>
                  <Link href="/blog-details">{title}</Link>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list list-unstyled">
          {categories.map((category, i) => (
            <li key={i}>
              <Link href="/blog-details">
                  {category} <span className="icon-arrow-right"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags</h3>
        <div className="sidebar__tags-list">
          {tags.map((tag, i) => (
            <a key={i} href="#">
              {tag}
            </a>
          ))}
        </div>
      </div>
      <div className="sidebar__single sidebar__comments">
        <h3 className="sidebar__title">comments</h3>
        <ul className="sidebar__comments-list list-unstyled">
          {comments.map(({ id, text, comment }) => (
            <li key={id}>
              <div className="sidebar__comments-icon">
                <i className="fas fa-comment"></i>
              </div>
              <div className="sidebar__comments-text-box">
                <p>
                  <TextSplit text={text} />
                </p>
                {comment && <h5>{comment}</h5>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
