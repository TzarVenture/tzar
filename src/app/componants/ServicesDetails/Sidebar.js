'use client';
import servicesDetails from "@/app/data/servicesDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import TextSplit from "../Reuseable/TextSplit";

const {
  categories,
  needHelp: { bg, icon, title, phone, phone1 },
} = servicesDetails;

const Sidebar = () => {
  const { pathname } = useRouter;

  return (
    <div className="service-details__sidebar">
      <div className="service-details__sidebar-service">
        <h4 className="service-details__sidebar-title">Best Selling Services Categories</h4>
        <ul className="service-details__sidebar-service-list list-unstyledss">
          {categories.map(({ id, title, href }) => (
            <li key={id} className={pathname === href ? "current" : ""}>
              <Link href={href}>

                {title} <span className="icon-arrow-right"></span>

              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="service-details__need-help">
        {/* <div
          className="service-details__need-help-bg"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div> */}
        <div className="service-details__need-help-icon">
          <span className={icon}></span>
        </div>
        <h2 className="service-details__need-help-title">
          <TextSplit text={title} />
        </h2>
        <p className="sidebar-para"> Hi there! I'm committed to helping businesses grow. Will yours be next?</p>

      
        <Link href="/tzar-studio" className="BtnStudio GraphicDesigning__studiobtn">
          Hire Us
        </Link>
        {/* <div className="service-details__need-help-contact">
          <p>Call us Anytime</p>
          <Link href={`tel:${phone}`}>+ {phone}</Link>
          <br></br>
          <Link href={`tel:${phone1}`}>+ {phone1}</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
