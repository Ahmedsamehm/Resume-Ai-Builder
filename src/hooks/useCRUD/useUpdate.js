import { useMutation, useQueryClient } from "@tanstack/react-query";
import Tost from "../../components/Tost";
import { useParams } from "react-router-dom";

const useUpdate = ({ MsgSuccess, MsgError, FunctionCallApi, mutationKey, }) => {
  const { id } = useParams();

  const { TostSuccess, TostError } = Tost();
  const queryClient = useQueryClient();

  const { mutate: updateMutation, isPending } = useMutation({
    mutationKey: [mutationKey, id],
    mutationFn: ({ formData, currentId }) => {
      return FunctionCallApi({ formData, currentId });
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

  return { updateMutation, isPending };
};

export default useUpdate;
