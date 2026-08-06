import bg from "@/assets/images/shapes/site-footer-top-shape.png";
import phoneIcon from "@/assets/images/icons/phone-icon.png";
import mailIcon from "@/assets/images/icons/mail.png";
import googlereview from "@/assets/images/icons/googlereview.png";
import googlepartner from "@/assets/images/icons/googlepartner.png";
import facebook from "@/assets/images/icons/facebook.png";
const footerData = {
  bg,
  title: "Your Perfect Business Partner Solution",
  phone: "91 730-405-6607",
  phone1: "91 776-077-5875",
  phoneIcon,
  mailIcon,
  googlereview,
  facebook,
  googlepartner,
  email: "corporate@tzar.co",
  address: "WeWork K. Raheja Platinum, Sag Baug Road, off Andheri - Kurla Rd, Marol",
  city: " Andheri East Mumbai, Maharashtra 400093",
  year: new Date().getFullYear(),
  author: "Tzar Digital Marketing Agency",
  socials: [
    {
      id: 1,
      icon: "fab fa-twitter",
      href: "#",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "https://www.facebook.com/TzarAgency",
    },
    {
      id: 3,
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/company/tzar-digital-agency/",
    },
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/tzarmktagency/",
    },
  ],
  links: [
    {
      id: 1,
      title: "Our Services",
      href: "/services",
    },
    {
      id: 2,
      title: "Meet Our Team",
      href: "/our-team",
    },
    {
      id: 3,
      title: "Our Portfolio",
      href: "/project",  //Our Portfolio
    },
    {
      id: 11,
      title: "Career",
      href: "/jobs",  //Our Portfolio
    },
    {
      id: 12,
      title: "Intership",
      href: "/intership",  //Our Portfolio
    },
    {
      id: 13,
      title: "Blog",
      href: "/blog",  //Our Portfolio
    },
    {
      id: 4,
      title: "Contact",
      href: "/contact",
    },
    {
      id: 5,
      title: "News",
      href: "/blog",
    },
    {
      id: 6,
      title: "FAQs",
      href: "/faq",
    },
    {
      id: 7,
      title: "Terms & Conditions",
      href: "/TermsConditions",
    },
    {
      id: 8,
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      id: 9,
      title: "Consultancy",
      href: "/about",
    },
    {
      id: 10,
      title: "Services",
      href: "/services",
    },
  ],
};

export default footerData;
