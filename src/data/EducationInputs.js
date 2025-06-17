const EducationInputs = () => {
  const inputs = [
    {
      name: "university",
      label: "University",
      type: "text",
      placeholder: "Enter your university",
    },
    {
      name: "degree",
      label: "Degree",
      type: "text",
      placeholder: "Enter your degree",
    },
    {
      name: "graduationyear",
      label: "Graduation Year",
      type: "text",
      placeholder: "Enter your graduation year",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      placeholder: "Enter your location",
    },
  ];
  return { inputs };
};

export default EducationInputs;
