import React, { useState, useEffect } from "react";

import { useResumeContext } from "../../../context/ResumeContext";
import { ConfigApiContext } from "../../../context/ConfigApiContext";
import useGetData from "../../../hooks/useCRUD/useGetData";

function WorkExperienceBody() {
  const { resumeData, updateSection } = useResumeContext();
  const { fetchingExperienceObj } = ConfigApiContext();
  const { data: Experience, isPending: isPendingFetchData } = useGetData(
    fetchingExperienceObj
  );
  const [displayedExperiences, setDisplayedExperiences] = useState([]);

  const { workExperience } = resumeData;

  // Merge DB data with live updates
  useEffect(() => {
    updateSection("workExperience", Experience);
  }, [Experience]);

  useEffect(() => {
    // If we have a live workExperience update
    if (workExperience) {
      // If it's an update to an existing experience (has ID)
      if (workExperience.id && Experience) {
        const updatedExperiences = Experience.map((exp) =>
          exp.id === workExperience.id ? { ...exp, ...workExperience } : exp
        );
        setDisplayedExperiences(updatedExperiences);
      }
      // If it's a new experience being created (no ID yet)
      else {
        setDisplayedExperiences([...(Experience || []), workExperience]);
      }
    }
    // No live updates, use data from DB
    else if (Experience) {
      setDisplayedExperiences(Experience);
    }
  }, [workExperience, Experience]);

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b mb-2">Work Experience</h2>
      {displayedExperiences?.length === 0 && (
        <p className="text-gray-500 text-sm italic">
          No work experience added yet.
        </p>
      )}
      {displayedExperiences?.length === 0 && (
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Job Title at Company Location</h3>
            <p className="text-black text-base font-medium tracking-tighter align-middle">
              <span className="font-medium">Date</span>
            </p>
          </div>
          <p className="text-black text-base font-medium tracking-tighter align-middle mt-1">
            Project details will appear here
          </p>
        </div>
      )}

      {displayedExperiences?.map((experience, index) => (
        <div key={experience?.id || index} className="mb-4">
          <div className="flex justify-between  ">
            <ul className="flex gap-1 text-black text-sm">
              <li>{experience?.jobtitle}</li>
              <li> {experience?.company}</li>
              <li>{experience?.location}</li>
            </ul>
            <p className="text-black text-base font-medium tracking-tighter align-middle">
              <span className="font-medium">{experience?.duration}</span>
            </p>
          </div>
          <p className="text-black text-base font-medium tracking-tighter align-middle mt-1">
            {experience?.projectdetails}
          </p>
        </div>
      ))}
    </section>
  );
}

export default WorkExperienceBody;
