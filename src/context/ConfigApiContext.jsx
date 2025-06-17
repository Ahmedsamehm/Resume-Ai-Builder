import { createContext, useContext } from "react";
import {
  addPersonalInfo,
  fetchPersonalInfo,
  updatePersonalInfo,
} from "../features/PersonalInformation/apiFetchDataPersonal";
import {
  addSingleExperience,
  DeleteExperience,
  fetchExperience,
  updateExperience,
} from "../features/WorkExperience/apiFetchWorkEx";
import {
  addEducation,
  fetchEducationData,
  updateEducation,
} from "../features/Education/apiFetchEducation";
import {
  apiSkills,
  DeleteSkills,
  getSkills,
  updateSkill,
} from "../features/Skills/apiFetchSkills";

const apiConfigs = {
  fetchingPersonalInfoObj: {
    MsgError: "Something Went Wrong While Fetching Personal Information",
    FunctionCallApi: fetchPersonalInfo,
    queryKey: "PersonalInformation",
  },

  fetchingExperienceObj: {
    MsgError: "Something Went Wrong While Fetching Experience",
    FunctionCallApi: fetchExperience,
    queryKey: "Experience",
  },
  addExperienceObj: {
    MsgSuccess: "Experience Added Successfully",
    MsgError: "Something Went Wrong While Adding Experience",
    FunctionCallApi: addSingleExperience,
    mutationKey: "Experience",
  },
  updateExperienceObj: {
    MsgSuccess: "Experience update Successfully",
    MsgError: "Something Went Wrong While update Experience",
    FunctionCallApi: updateExperience,
    mutationKey: "Experience",
  },
  deleteExperienceObj: {
    MsgSuccess: "Experience Deleted Successfully",
    MsgError: "Something Went Wrong While Deleted Experience",
    FunctionCallApi: DeleteExperience,
    mutationKey: "Experience",
  },

  fetchingEducationObj: {
    MsgError: "Something Went Wrong While Fetching Education",
    FunctionCallApi: fetchEducationData,
    queryKey: "Education",
  },
  addEducationObj: {
    MsgSuccess: "Education Added Successfully",
    MsgError: "Something Went Wrong While Adding Education",
    FunctionCallApi: addEducation,
    mutationKey: "Education",
  },
  updateEducationObj: {
    MsgSuccess: "Education update Successfully",
    MsgError: "Something Went Wrong While update Education",
    FunctionCallApi: updateEducation,
    mutationKey: "Education",
  },

  fetchingSkillsObj: {
    MsgError: "Something Went Wrong While Fetching Skill",
    FunctionCallApi: getSkills,
    queryKey: "Skill",
  },
  addSkillsObj: {
    MsgSuccess: "Skill Added Successfully",
    MsgError: "Something Went Wrong While Adding Skill",
    FunctionCallApi: apiSkills,
    mutationKey: "Skill",
  },
  updateSkillsObj: {
    MsgSuccess: "Skill update Successfully",
    MsgError: "Something Went Wrong While update Skill",
    FunctionCallApi: updateSkill,
    mutationKey: "SkillUpdated",
  },
  deleteSkillsObj: {
    MsgSuccess: "Skill Deleted Successfully",
    MsgError: "Something Went Wrong While Deleted Skill",
    FunctionCallApi: DeleteSkills,
    mutationKey: "Skill",
  },
  updatePersonalInfoObj: {
    MsgSuccess: "Personal Information update Successfully",
    MsgError: "Something Went Wrong While update Personal Information",
    FunctionCallApi: updatePersonalInfo,
    mutationKey: "PersonalInformation",
  },
  addPersonalInfoObj: {
    MsgSuccess: "Personal Information Added Successfully",
    MsgError: "Something Went Wrong While Adding Personal Information",
    FunctionCallApi: addPersonalInfo,
    mutationKey: "PersonalInformation",
  },

  // deletePersonalInfoObj: {
  //   MsgSuccess: "Personal Information Deleted Successfully",
  //   MsgError: "Something Went Wrong While Deleted Personal Information",
  //   FunctionCallApi: deletePersonalInfo,
  //   mutationKey: "PersonalInformation",
  // },
};

const ApiConfigContext = createContext(apiConfigs);

export const ConfigApiContext = () => useContext(ApiConfigContext);

export const ApiConfigProvider = ({ children }) => (
  <ApiConfigContext.Provider value={apiConfigs}>
    {children}
  </ApiConfigContext.Provider>
);
