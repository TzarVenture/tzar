import bg from "@/assets/images/resources/counter-one-pattern.png"

const contactForm = {
  bg,
  Ftitle: "Let’s Grow Your Traffic!",
  poptitle:"Work With Us",
  popdec:"Fill out the form below to speak with someone from our team.",
  tagline: "contact with us",
  inputs: [
    {
      type: "text",
      placeholder: "Your name",
      name: "name",
      required: true,
    },
    {
      type: "email",
      placeholder: "Email address",
      name: "email",
      required: true,
    },
    {
      type: "text",
      placeholder: "company",
      name: "company",
      required: true,
    },
    {
      type: "text",
      placeholder: "Phone",
      name: "phone",
      required: false,
    },
    {
      type: "",
      placeholder: "Write message",
      name: "message",
      required: true,
    },
  ],
};

export default contactForm;
