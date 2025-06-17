const WorkExperienceInputs = () => {
  const inputs = [
    {
      name: "jobtitle",
      label: "Job Title",
      type: "text",
      placeholder: "Enter your job title",
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      placeholder: "Enter your company",
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      placeholder: "Enter your location",
    },
    {
      name: "projectdetails",
      label: "Project Details",
      type: "text",
      placeholder: "Enter your project details",
    },
    {
      name: "duration",
      label: "Duration",
      type: "text",
      placeholder: "Enter your duration",
    },
  ];
  return { inputs };
};

export default WorkExperienceInputs;
