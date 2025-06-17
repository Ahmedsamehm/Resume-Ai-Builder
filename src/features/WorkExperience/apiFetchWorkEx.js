import supabase from "../../services/subabase";

/**
 * Fetches all experiences for a specific resume
 * @param {string} id - Resume ID
 * @returns {Promise<Array>} - Array of experience objects
 */
const fetchExperience = async (id) => {
  try {
    const { data: Experience, error } = await supabase.from("Experience").select("*").eq("resume_id", id).order("id", { ascending: true });

    if (error) throw error;
    return Experience || [];
  } catch (error) {
    console.error("Error fetching experience:", error);
    throw error;
  }
};

/**
 * Adds one or more experiences to a resume
 * @param {Object} params - Parameters object
 * @param {Array} params.formData - Array of experience objects
 * @param {string} params.id - Resume ID
 * @returns {Promise<Array>} - Array of added experience objects
 */
const addSingleExperience = async ({ formData, id }) => {
  try {
    // Ensure formData is an array and add resume_id to each item
    const formattedData = Array.isArray(formData) ? formData.map((item) => ({ ...item, resume_id: id })) : [{ ...formData, resume_id: id }];

    const { data, error } = await supabase.from("Experience").insert(formattedData).select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error inserting experiences:", error);
    throw error;
  }
};

/**
 * Deletes an experience by ID
 * @param {string} id - Experience ID
 * @returns {Promise<Object>} - Result of deletion operation
 */
const DeleteExperience = async (id) => {
  try {
    const { data, error } = await supabase.from("Experience").delete().eq("id", id).select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error deleting experience:", error);
    throw error;
  }
};

/**
 * Updates an experience by ID
 * @param {Object} params - Parameters object
 * @param {Object} params.formData - Updated experience data
 * @param {string} params.id - Experience ID
 * @returns {Promise<Array>} - Updated experience object
 */
const updateExperience = async ({ formData, currentId }) => {
  try {
    const { data, error } = await supabase.from("Experience").update(formData).eq("id", currentId).select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error updating experience:", error);
    throw error;
  }
};

export { fetchExperience, addSingleExperience, DeleteExperience, updateExperience };
