import supabase from "./subabase";

const fetchResume = async () => {
  try {
    const { data: user, error: userError } = await supabase.auth.getUser();
    if (userError) throw userError;

    const { data: Resumes, error } = await supabase
      .from("Resumes")
      .select("*")
      .eq("user_id", user.user.id);

    if (error) throw error;
    localStorage.setItem("userid", user.user.id);
    return Resumes;
  } catch (error) {
    console.error("Error fetching resumes:", error);
    throw error;
  }
};

const DeleteResume = async (id) => {
  try {
    const { error } = await supabase.from("Resumes").delete().eq("id", id);
    if (error) throw error;
  } catch (error) {
    console.error("Error deleting resume:", error);
    throw error;
  }
};

async function createResume({ title }) {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;

    const { data, error } = await supabase
      .from("Resumes")
      .insert([
        {
          title: title,
          user_id: user.id,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;
    return { data };
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error;
  }
}

export { createResume, DeleteResume, fetchResume };
