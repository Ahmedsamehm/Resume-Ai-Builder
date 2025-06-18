import React, { useEffect, useState } from "react";

import { Button } from "../../components/ui/button";
import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import PreviewSection from "./PreviewSection";
import { useResumeContext } from "../../context/ResumeContext";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import JobDescription from "../jobDescription/jobDescription";

import DotsStylingBody from "../../components/dotsStylingBody";

function ResumeLayOut() {
  // this state controls the form appear for user
  const [steps, setSteps] = useState(0);
  // this context is used to update the state for live preview section
  const { updateSection } = useResumeContext();

  useEffect(() => {
    localStorage.setItem("steps", steps);
  }, [steps]);

  // here i send section "name" and data to update the state so user can see what he writes in preview section
  const handleLiveUpdate = (section, data) => {
    updateSection(section, data);
  };

  const handelIncrement = () => {
    setSteps(steps + 1);
  };
  const handelDecrement = () => {
    setSteps(steps - 1);
  };

  const renderStep = () => {
    switch (steps) {
      case 0:
        return <JobDescription />;
      case 1:
        return (
          <PersonalInformation
            onLiveUpdate={(data) => handleLiveUpdate("personalInfo", data)}
          />
        );
      case 2:
        return (
          <WorkExperience
            onLiveUpdate={(data) => handleLiveUpdate("workExperience", data)}
          />
        );
      case 3:
        return (
          <Education
            onLiveUpdate={(data) => handleLiveUpdate("education", data)}
          />
        );
      case 4:
        return (
          <Skills onLiveUpdate={(data) => handleLiveUpdate("Skills", data)} />
        );
    }
  };

  return (
    <>
      <DotsStylingBody />
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2 lg:col-span-1 ">
          <div className="flex justify-between gap-2  ">
            <Button
              disabled={steps === 0}
              onClick={handelDecrement}
              className={"capitalize"}
            >
              back
            </Button>

            <Button
              disabled={steps === 4}
              onClick={handelIncrement}
              className={"capitalize"}
            >
              next
            </Button>
          </div>
          {renderStep()}
        </div>

        <div className="col-span-2 lg:col-span-1  ">
          <PreviewSection />
        </div>
      </div>
    </>
  );
}

export default ResumeLayOut;
