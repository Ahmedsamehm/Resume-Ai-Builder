import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import Tost from "../../components/Tost";

const useAdd = ({ MsgSuccess, MsgError, FunctionCallApi, mutationKey }) => {

  const { TostSuccess, TostError } = Tost();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { mutate: addMutation, isPending } = useMutation({
    mutationKey: [mutationKey],

    mutationFn: ({ formData, id }) => {
      return FunctionCallApi({ formData, id });
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

  return { addMutation, isPending };
};

export default useAdd;
