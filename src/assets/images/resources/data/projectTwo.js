const projectTwo = {
  tagline: "recent projects",
  title: "work showcase",
  filters: [

    {
      id: 2,
      name: "Branding",
      filterData: "bra",
    },
    {
      id: 3,
      name: "Photography",
      filterData: "photo",
    },
    {
      id: 4,
      name: "Web Design",
      filterData: "web",
    },
    {
      id: 5,
      name: "Apps",
      filterData: "app",
    },
  ],
  projects: [
    {
      id: 1,
      image: "project-two-img-2.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: ["bra", "photo", "web"],
      col: 3,
    },
    {
      id: 2,
      image: "project-two-img-3.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [ "web"],
      col: 3,
    },
    {
      id: 3,
      image: "project-two-img-1.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [ "photo"],
      col: 6,
    },
    {
      id: 4,
      image: "project-two-img-6.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [ "photo", "app"],
      col: 6,
    },
    {
      id: 5,
      image: "project-two-img-4.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [ "app", "web"],
      col: 3,
    },
    {
      id: 6,
      image: "project-two-img-5.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: [ "web"],
      col: 3,
    },
  ],
};

export default projectTwo;
