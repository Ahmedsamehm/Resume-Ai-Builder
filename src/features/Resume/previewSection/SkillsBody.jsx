import React, { useEffect, useState } from "react";

import { useResumeContext } from "../../../context/ResumeContext";
import { ConfigApiContext } from "../../../context/ConfigApiContext";
import useGetData from "../../../hooks/useCRUD/useGetData";

function SkillsBody() {
  const { resumeData, updateSection } = useResumeContext();
  const { Skills } = resumeData;
  const { fetchingSkillsObj } = ConfigApiContext();
  const { data: skillList, isPending: skillsLoading } =
    useGetData(fetchingSkillsObj);

  const [displayedSkills, setDisplayedSkills] = useState([]);

  useEffect(() => {
    updateSection("Skills", skillList);
  }, [skillList]);
  useEffect(() => {
    const skill = Skills?.skill;

    if (skillList) {
      return setDisplayedSkills(skillList);
    } else {
      return setDisplayedSkills(skill);
    }
  }, [Skills, skillList]);

  return (
    <section>
      <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>

      {displayedSkills?.length === 0 && (
        <p className="text-gray-500 text-sm italic">No skills added yet.</p>
      )}

      <ul className="grid grid-cols-2">
        {displayedSkills?.map((skillItem, index) => (
          <li
            className="col-span-1 list-disc ml-5"
            key={skillItem?.id || index}
          >
            {skillItem?.skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsBody;
