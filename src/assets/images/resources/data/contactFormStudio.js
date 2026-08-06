import bg from "@/assets/images/resources/counter-one-pattern.png"

const contactFormStudio = {
  bg,
  Ftitle: "From Concept to Capture: We Do It All",
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
      placeholder: "Website",
      name: "Website",
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

export default contactFormStudio;
