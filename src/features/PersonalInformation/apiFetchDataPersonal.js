import supabase from "../../services/subabase";

const fetchPersonalInfo = async (id) => {
  try {
    const { data, error } = await supabase
      .from("PersonalInformation")
      .select("*")
      .eq("resume_id", id);

    if (error)
      throw new Error(`Failed to fetch personal info: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Error in fetchPersonalInfo:", error.message);
    throw error;
  }
};

const addPersonalInfo = async ({ formData, id }) => {
  try {
    const { data, error } = await supabase
      .from("PersonalInformation")
      .insert([{ ...formData, resume_id: id }])
      .select();

    if (error) throw new Error(`Failed to add personal info: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Error in addPersonalInfo:", error.message);
    throw error;
  }
};

const updatePersonalInfo = async ({ formData, currentId }) => {
  try {
    const { data, error } = await supabase
      .from("PersonalInformation")
      .update(formData)
      .eq("id", currentId)
      .select();

    if (error)
      throw new Error(`Failed to update personal info: ${error.message}`);

    return data;
  } catch (error) {
    console.error("Error in updatePersonalInfo:", error.message);
    throw error;
  }
};

export { fetchPersonalInfo, addPersonalInfo, updatePersonalInfo };
