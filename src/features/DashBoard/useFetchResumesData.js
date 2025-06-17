import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createResume,
  DeleteResume,
  fetchResume,
} from "../../services/apiResume";
import Tost from "../../components/Tost";
const { TostSuccess, TostError } = Tost();
function useFetchData() {
  const userId = localStorage.getItem("userid");
  const {
    data: Resumes,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["Resumes", userId],
    queryFn: () => fetchResume(),
    onError: (error) => {
      TostError("Error fetching resumes");
      console.error("Error fetching resumes:", error);
    },
  });

  return { Resumes, isLoading, isPending };
}

const useAddResume = () => {
  const queryClient = useQueryClient();
  const { mutate: AddResume, isPending } = useMutation({
    mutationKey: ["AddResume"],
    mutationFn: (title) => {
      return createResume(title);
    },
    onSuccess: () => {
      TostSuccess("Resume Added Successfully");
      queryClient.invalidateQueries(["Resumes"]);
    },
    onError: () => {
      TostError("Something Went Wrong While Adding Resume");
    },
  });
  return { AddResume, isPending };
};
const useDeleteResume = () => {
  const queryClient = useQueryClient();
  const { mutate: DeleteResumeCard, isPending } = useMutation({
    mutationKey: ["DeleteResume"],
    mutationFn: (id) => {
      return DeleteResume(id);
    },
    onSuccess: () => {
      TostSuccess("Resume Deleted Successfully");
      queryClient.invalidateQueries(["Resumes"]);
    },
    onError: () => {
      TostError("Something Went Wrong While Deleting Resume");
    },
  });
  return { DeleteResumeCard, isPending };
};
export { useFetchData, useAddResume, useDeleteResume };
