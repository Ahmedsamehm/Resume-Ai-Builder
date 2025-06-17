import React from "react";

import PersonalInformationBody from "./previewSection/PersonalInformationBody";
import WorkExperienceBody from "./previewSection/WorkExperienceBody";
import EducationBody from "./previewSection/EducationBody";
import SkillsBody from "./previewSection/SkillsBody";
import { useResumeContext } from "../../context/ResumeContext";

function PreviewSection() {
  //this a custom hook that download section as pdf
  const { contentRef } = useResumeContext();
  return (
    <>
      <section
        ref={contentRef}
        className="min-h-screen mx-auto  bg-white shadow-md rounded-md p-2 md:p-5 text-sm md:text-base  text-gray-900 capitalize"
      >
        {/* Personal Information */}
        <PersonalInformationBody />
        {/* Work Experience */}
        <WorkExperienceBody />

        {/* Education */}
        <EducationBody />

        {/* Skills */}
        <SkillsBody />
      </section>
    </>
  );
}

export default PreviewSection;
