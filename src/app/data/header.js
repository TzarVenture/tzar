import phoneIcon from "@/assets/images/icons/phone-icon.png";
import logo1 from "@/assets/images/resources/tzar-logo.png";

const navItems = [
  {
    id: 1,
    name: "Our Agency",
    href: "/about-us",
    subNavItems: [
      {
        id: 1,
        name: "About Us",
        href: "/about-us",
      },
      {
        id: 2,
        name: "Our Services",
        href: "/services",
      },
      {
        id: 3,
        name: "Our Team",
        href: "/our-team",
      },
      {
        id: 4,
        name: "Our Client",
        href: "/our-client",
        // subItems: [
        //   {
        //     id: 1,
        //     name: "Header One",
        //     href: "/",
        //   },
        //   { id: 2, name: "Header Two", href: "/home2" },
        //   { id: 3, name: "Header Three", href: "/home3" },
        // ],
      },
      {
        id: 5,
        name: "FAQs",
        href: "/faqs",
      },

    ],
  },
  // {
  //   id: 2,
  //   name: "Pages",
  //   href: "",
  //   subNavItems: [
  //     { id: 1, name: "About", href: "/about" },
  //     { id: 2, name: "Team", href: "/team" },
  //     { id: 3, name: "FAQs", href: "/faq" },
  //     { id: 4, name: "404 Error", href: "/404" },
  //   ],
  // },
  {
    id: 3,
    name: "Services",
    href: "/services",
    subNavItems: [
      { id: 1, name: "All Services", href: "/services" },
      { id: 2, name: "Website Development", href: "/website-development-services" },
      { id: 3, name: "Search Engine Optimization", href: "/search-engine-optimization-services" },
      { id: 4, name: "Graphic Designing", href: "/graphic-designing" },
      { id: 5, name: "Social Media Marketing", href: "/social-media-marketing-services" },
      { id: 6, name: "Logo Design", href: "/logo-design-services" }, //Create Page  
      { id: 7, name: "Content Marketing", href: "/content-marketing-services" },
      // { id: 8, name: "Pay Per Click", href: "/pay-per-click-services" },
      // { id: 9, name: "Lead Generation", href: "/lead-generation-services" },
      { id: 10, name: "Product Design & Packaging", href: "/product-design-packaging-services" },
      // { id: 11, name: "Cloud Kitchen Marketing", href: "/cloud-kitchen-marketing-services" },
    ],
  },
  {
    id: 8,
    name: "Tzar Studio",
    href: "/tzar-studio",
    subNavItems: [],
  },
  // {
  //   id: 6,
  //   name: "Animation 3D | 2D",
  //   href: "/",
  //   subNavItems: [
  //     // { id: 1, name: "Blog Sidebar", href: "/blog-sidebar" },
  //   ],
  // },
  {
    id: 9,
    name: "Outdoor-Ads",
    href: "/outdoor-ads",
    subNavItems: [],
  },
  {
    id: 4,
    name: "Portfolio",
    href: "/portfolio",
    subNavItems: [],
  },
  {
  id: 7,
  name: "Corporate Gifting",
  href: "/corporate-gifting",
  subNavItems: [],
},
  // {
  //   id: 5,
  //   name: "Hire Us",
  //   href: "/",
  //   subNavItems: [],
  // },

  //  {
  //     id: 7,
  //     name: "Contact",
  //     href: "/contact",
  //     subNavItems: [],
  //   },
  // {
  //   id: 7,
  //   name: "News & Media",
  //   href: "/",
  //   subNavItems: [],
  // },


];

const header = {
  logo1,
  phone: "91 730-405-6607",
  phone1: "91 900-425-0252",
  email: "corporate@tzar.co",
  phoneIcon,
  navItems,
  socials: [
    "fab fa-twitter",
    "fab fa-facebook-square",
    "fab fa-pinterest-p",
    "fab fa-instagram",
  ],
};

export default header;
