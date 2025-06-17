import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GeminiAi } from "./geminiService";
import Tost from "../../components/Tost";

const useAi = () => {
  const { TostSuccess, TostError } = Tost();
  const queryClient = useQueryClient();
  const { mutate: AiFunction, isPending } = useMutation({
    mutationKey: ["Ai"],
    mutationFn: ({ Text, handleImprove, contentType, setKeywords }) => {
      return GeminiAi({ Text, handleImprove, contentType, setKeywords });
    },
    onSuccess: () => {
      TostSuccess("we get keywords from job description successfully ");
      queryClient.invalidateQueries(["Ai"]);
    },
    onError: () => {
      TostError("Something went wrong");
    },
  });
  return { AiFunction, isPending };
};

export default useAi;
