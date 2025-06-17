import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Tost from "../../components/Tost";

const useGetData = (params) => {
  const { MsgError, FunctionCallApi, queryKey } = params;
  const { TostError } = Tost();

  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => FunctionCallApi(id),
    staleTime: 5 * 60 * 1000,
    staleTimeUpdateMs: 5 * 60 * 1000,
    onError: (error) => {
      TostError(MsgError || "Error fetching data");
      console.error("Error in useFetchedPersonalInfo:", error.message);
    },
  });

  return { data, isPending };
};

export default useGetData;
