import supabase from "../../services/subabase";

const getSkills = async (id) => {
  try {
    const { data: Skills, error } = await supabase
      .from("Skills")
      .select("*")
      .eq("resume_id", id)
      .order("id", { ascending: true });

    if (error) throw new Error(`Failed to fetch skills: ${error.message}`);
    return Skills || [];
  } catch (error) {
    console.error("Error in getSkills:", error.message);
    throw error;
  }
};

const apiSkills = async ({ formData, id }) => {
  // console.log(formData.skill);

  try {
    // Validate inputs
    if (!formData || !id) {
      throw new Error("Skill text and resume ID are required");
    }

    // Clean up the skill text (trim whitespace)

    const { data, error } = await supabase
      .from("Skills")
      .insert({ skill: formData.skill, resume_id: id })
      .select();

    if (error) throw new Error(`Failed to insert skill: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Error in apiSkills:", error.message);
    throw error;
  }
};

const updateSkill = async ({ formData, currentId }) => {
  try {
    // Validate inputs
    if (!formData || !currentId) {
      throw new Error("Skill text and skill ID are required");
    }

    // Clean up the skill text (trim whitespace)
    // const skillText = formData.trim();

    const skill = formData?.skill;
    const { data, error } = await supabase
      .from("Skills")
      .update({ skill: skill })
      .eq("id", currentId)
      .select();

    if (error) throw new Error(`Failed to update skill: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Error in updateSkill:", error.message);
    throw error;
  }
};

const DeleteSkills = async (id) => {
  try {
    if (!id) {
      throw new Error("Skill ID is required");
    }

    const { data, error } = await supabase
      .from("Skills")
      .delete()
      .eq("id", id)
      .select();

    if (error) throw new Error(`Failed to delete skill: ${error.message}`);
    return data;
  } catch (error) {
    console.error("Error in DeleteSkills:", error.message);
    throw error;
  }
};

export { apiSkills, getSkills, DeleteSkills, updateSkill };
