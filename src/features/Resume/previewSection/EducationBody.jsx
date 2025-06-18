import React, { useEffect } from "react";

import { useResumeContext } from "../../../context/ResumeContext";
import useGetData from "../../../hooks/useCRUD/useGetData";
import { ConfigApiContext } from "../../../context/ConfigApiContext";

function EducationBody() {
  const { resumeData, updateSection } = useResumeContext();
  const { fetchingEducationObj } = ConfigApiContext();
  const { data: Education, isPending } = useGetData(fetchingEducationObj);
  const { education } = resumeData;

  useEffect(() => {
    updateSection("education", Education);
  }, [Education]);
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
      <h3 className="font-medium">
        {education?.university ||
          Education?.[0]?.university ||
          "Cairo University"}
      </h3>
      <div className="flex justify-between">
        <h3 className="font-medium">
          {education?.degree || Education?.[0]?.degree || "Bachelor"}
        </h3>
        <span className="font-medium">
          {education?.graduationyear ||
            Education?.[0]?.graduationyear ||
            "2020"}
        </span>
      </div>
      <span>{education?.location || Education?.[0]?.location}</span>
    </section>
  );
}

export default EducationBody;
