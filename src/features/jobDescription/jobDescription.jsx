// src/features/jobDescription/jobDescription.jsx

import React, { useEffect, useState } from "react";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import useAi from "../../services/ServicesAi/useAi";
import Loading from "../../components/ui/Loading";
function JobDescription() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const { AiFunction, isPending } = useAi();

  // Handle textarea change
  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  // Save and load job description from localStorage
  useEffect(() => {
    if (jobDescription && jobDescription !== "") {
      localStorage.setItem("jobDescription", jobDescription);
    } else {
      setJobDescription(localStorage.getItem("jobDescription") || "");
    }
  }, [jobDescription]);

  // Send job description to AI for keyword extraction
  const handleSendDataToAi = () => {
    AiFunction({
      jobDescription,
      contentType: "keywordextractor",
      setKeywords,
    });
  };

  return (
    <div>
      <div className="p-5">
        <span>Add job description</span>
        <Textarea
          value={jobDescription}
          className="mt-2"
          placeholder="Type your job description"
          onChange={handleJobDescriptionChange}
        />
        <Button
          disabled={isPending}
          className="mt-3"
          onClick={handleSendDataToAi}
        >
          {isPending ? <Loading /> : "Save Job Description"}
        </Button>
      </div>
    </div>
  );
}

export default JobDescription;
