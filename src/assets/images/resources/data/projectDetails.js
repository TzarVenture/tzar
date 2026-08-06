import image from "@/assets/images/resources/project-details-img.jpg";

const projectDetails = {
  image,
  title: "Filmor Experience",
  texts: [
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    "Tincidunt elit magnis nulla facilisis sagittis sapien nunc Many desktop publishing packages and web page editors amet ultrices dolores sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices.",
  ],
  points: [
    "Take a look at our round up of the best shows",
    "It has survived not only five centuries",
    "Lorem Ipsum has been the ndustry standard dummy text",
  ],
  name: "Jessica Brown",
  category: "Web & Application Design",
  date: "20 August, 2021",
  socials: [
    {
      id: 1,
      icon: "fab fa-twitter",
      href: "#",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "#",
    },
    {
      id: 3,
      icon: "fab fa-pinterest-p",
      href: "#",
    },
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "#",
    },
  ],
};

export const similarWork = {
  tagline: "recent projects",
  title: "similar work",
  projects: [
    {
      id: 1,
      image: "project-one-img-1.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [],
    },
    {
      id: 2,
      image: "project-one-img-2.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [],
    },
    {
      id: 3,
      image: "project-one-img-3.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [],
    },
  ],
};

export default projectDetails;
