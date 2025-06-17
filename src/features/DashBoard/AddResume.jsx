import { Loader2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";

import { useAddResume } from "./useFetchResumesData";
import FormField from "../../components/ui/FormField ";
function AddResume() {
  const { AddResume, isPending: AddResumeLoading } = useAddResume();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      AddResume(data);
      reset();
    }
  };

  return (
    <>
      <Dialog className="cursor-pointer">
        <DialogTrigger className="p-10 ">
          <Plus className="size-10 cursor-pointer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="space-y-2">
            <DialogTitle>Choose Name for Resume</DialogTitle>
            <DialogDescription className="flex flex-col space-y-2">
              <div>
                <FormField
                  register={register}
                  type={"text"}
                  placeholder={"title"}
                  label={"title"}
                  name={"title"}
                  errors={errors}
                />
              </div>
              {
                <Button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  disabled={AddResumeLoading}
                >
                  {AddResumeLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Add Resume"
                  )}
                </Button>
              }
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddResume;
