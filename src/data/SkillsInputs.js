const SkillsInputs = (isEditing) => {
  const inputs = [
    {
      name: "skill",
      label: isEditing ? "Update Skill" : "Add Skill",
      type: "text",
      placeholder: "Enter your skill (e.g., React, JavaScript, UI Design)",
    },
  ];
  return { inputs };
};

export default SkillsInputs;
