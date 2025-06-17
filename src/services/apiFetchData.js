import Tost from "../components/Tost";

const fetchData = async ({ TableName, select, id }) => {
  const { TostError } = Tost();
  const { data, error } = await supabase
    .from(TableName)
    .select(select)
    .eq("resume_id", id);

  if (error) {
    TostError(error.message);
    console.log(error);
  }

  return data;
};

export { fetchData };
