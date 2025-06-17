import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { apiLogin, getUser, Logout } from "../../services/apiLogin";
import Tost from "../../components/Tost";
const { TostSuccess, TostError } = Tost();
const useGetUser = () => {
  const {
    data: user,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  return { user, isPending, isLoading };
};

const useLogin = () => {
  const queryClient = useQueryClient();
  const { mutate: singUp, isPending } = useMutation({
    mutationKey: ["Login"],
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: () => {
      TostSuccess("Login Successful");
      queryClient.invalidateQueries(["user"]);
    },
    onError: () => {
      TostError("invalid email or password");
    },
  });

  return { singUp, isPending };
};

const useLogout = () => {
  const queryClient = useQueryClient();
  const { mutate: LogoutFun, isPending } = useMutation({
    mutationFn: () => {
      return Logout();
    },
    onSuccess: () => {
      TostSuccess("Logout Successful");
      queryClient.invalidateQueries(["user"]);
    },
    onError: () => {
      TostError("Logout Failed");
    },
  });

  return { LogoutFun, isPending };
};
export { useLogin, useLogout, useGetUser };
