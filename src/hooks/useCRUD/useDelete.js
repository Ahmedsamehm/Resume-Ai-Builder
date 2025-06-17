import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Tost from "../../components/Tost";

const useDelete = ({ MsgSuccess, MsgError, FunctionCallApi, mutationKey }) => {
  const { TostSuccess, TostError } = Tost();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { mutate: deleteMutation, isPending } = useMutation({
    mutationKey: [mutationKey],
    mutationFn: (id) => {
      return FunctionCallApi(id);
    },
    onSuccess: (data) => {
      TostSuccess(MsgSuccess);
      queryClient.invalidateQueries([mutationKey, id]);
      return data;
    },
    onError: () => {
      TostError(MsgError);
    },
  });

  return { deleteMutation, isPending };
};

export default useDelete;
