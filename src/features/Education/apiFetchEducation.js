import supabase from "../../services/subabase";

const fetchEducationData = async (id) => {
  try {
    const { data: Education, error } = await supabase.from("Education").select("*").eq("resume_id", id);

    if (error) throw new Error(`Failed to fetch education data: ${error.message}`);
    return Education;
  } catch (error) {
    console.error("Error in fetchEducationData:", error.message);
    throw error;
  }
};

const addEducation = async ({ formData, id }) => {
  try {
    const { data, error } = await supabase
      .from("Education")
      .insert({
        ...formData,
        resume_id: id,
      })
      .select();

    if (error) throw new Error(`Failed to add education: ${error.message}`);
    return { data };
  } catch (error) {
    console.error("Error in addEducation:", error.message);
    throw error;
  }
};

const updateEducation = async ({ formData, currentId }) => {
  try {
    const { data, error } = await supabase
      .from("Education")
      .update({
        ...formData,
      })
      .eq("id", currentId)
      .select();
    return data;
  } catch (error) {
    console.error("Error in updateEducation:", error.message);
    throw error;
  }
};
export { fetchEducationData, addEducation, updateEducation };
