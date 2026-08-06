const contactPage = {
  title: "have Query?",
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
      placeholder: "Phone",
      name: "phone",
      required: false,
    },
    {
      type: "email",
      placeholder: "Subject",
      name: "subject",
      required: true,
    },
    {
      type: "",
      placeholder: "Write message",
      name: "message",
      required: true,
    },
  ],
};

export default contactPage;
