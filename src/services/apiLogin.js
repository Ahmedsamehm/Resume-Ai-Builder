import Tost from "../components/Tost";
import supabase from "./subabase";
const { TostError } = Tost();
const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fixed condition
  if (user !== null && user !== undefined) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return user;
};

const apiLogin = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) throw error;

    // Wait for getUser to complete after successful login
    await getUser();

    return { data };
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const LoginWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://ahmedsamehm.github.io/Resume-Ai-Builder/",
    },
  });

  if (error) {
    console.error("Error logging in:", error.message);
  }
};

const Logout = async () => {
  const { error, data } = await supabase.auth.signOut();
  if (error) throw error;

  // Clear localStorage on logout
  localStorage.removeItem("user");

  return error;
};

export { apiLogin, Logout, getUser, LoginWithGoogle };
