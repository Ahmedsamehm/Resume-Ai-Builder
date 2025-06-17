const PersonalInputs = () => {
  const inputs = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      name: "position",
      label: "Position",
      type: "text",
      placeholder: "Enter your position",
    },
    {
      name: "phone",
      label: "phone",
      type: "tel",
      placeholder: "Enter your phone",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Enter your address",
    },
    {
      name: "linkedIn",
      label: "LinkedIn",
      type: "text",
      placeholder: "Enter your LinkedIn profile",
    },
    {
      name: "summary",
      label: "Summary",
      type: "textarea",
      placeholder: "Write a short summary",
    },
  ];
  return { inputs };
};

export default PersonalInputs;
