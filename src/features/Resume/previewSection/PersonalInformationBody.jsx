import React, { useEffect } from "react";

import { useResumeContext } from "../../../context/ResumeContext";
import Loading from "../../../components/ui/Loading";
import useGetData from "../../../hooks/useCRUD/useGetData";
import { ConfigApiContext } from "../../../context/ConfigApiContext";

function PersonalInformationBody() {
  // Get resume data and update function from context
  const { resumeData, updateSection } = useResumeContext();
  // Get API config for personal info
  const { fetchingPersonalInfoObj } = ConfigApiContext();
  // Fetch personal information data
  const { data: PersonalInformation, isPending } = useGetData(fetchingPersonalInfoObj);
  // Extract personal info from resume data
  const { personalInfo } = resumeData;

  // Update the personalInfo section in context when data changes
  useEffect(() => {
    updateSection("personalInfo", PersonalInformation);
  }, [PersonalInformation]);

  // Show loading spinner while data is being fetched
  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      {/* Header with name, position, and contact info */}
      <header className="mb-6 border-b pb-4 mx-auto text-xs  ">
        <div className="flex justify-center flex-col text-center py-2 ">
          <h1 className="capitalize text-sm  ">
            {personalInfo?.fullName ||
              PersonalInformation?.[0]?.fullName ||
              "John Doe"}
          </h1>
          <span>
            {personalInfo?.position ||
              PersonalInformation?.[0]?.position ||
              "Software Engineer"}
          </span>
        </div>
        <ul className="grid grid-cols-3 gap-4 text-center items-center justify-items-center">
          <li className="justify-self-start">
            {personalInfo?.email ||
              PersonalInformation?.[0]?.email ||
              "johndoe@example.com"}
          </li>
          <li className="flex flex-col">
            <span className="text-black">
              (+20)
              {personalInfo?.phone ||
                PersonalInformation?.[0]?.phone ||
                "0123456789"}
            </span>
            <span className="text-black">
              {personalInfo?.address ||
                PersonalInformation?.[0]?.address ||
                "Cairo, Egypt"}
            </span>
          </li>
          <li className="flex flex-col">
            <a
              className="text-chart-1"
              href={`${
                personalInfo?.linkedIn ||
                PersonalInformation?.[0]?.linkedIn ||
                "https://www.linkedin.com/"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </header>

      {/* Summary section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Summary</h2>
        <p className="text-black text-base font-medium tracking-tighter align-middle">
          {personalInfo?.summary ||
            PersonalInformation?.[0]?.summary ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non nam tenetur molestiae doloribus laboriosam placeat nemo! In, perspiciatis rerum?"}
        </p>
      </section>
    </>
  );
}

export default PersonalInformationBody;
