import { useNavigate } from "react-router-dom";
import Form from "../../components/ui/Form";
import { useGetUser, useLogin } from "./useLogin";
import { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { LoginWithGoogle } from "../../services/apiLogin";

function LoginBody() {
  const navigate = useNavigate();
  const { singUp, isPending } = useLogin();
  const { user, isPending: isLoading } = useGetUser();

  const { aud, is_anonymous, role } = user || {};

  const inputs = [
    {
      name: "email",
      label: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const onSubmit = async (data) => {
    singUp(data);
  };

  useEffect(() => {
    if (user && aud === "authenticated" && !isLoading) {
      navigate("/");
    }
  }, [aud, user]);
  return (
    <>
      <div>
        <Form isLoading={isPending} inputs={inputs} onSubmit={onSubmit} title={"Login"} showSaveBtn={true} Rest={false} className="w-full md:w-lg" />
        <Button onClick={LoginWithGoogle} className={`w-full`}>
          Google
        </Button>
      </div>
    </>
  );
}

export default LoginBody;
