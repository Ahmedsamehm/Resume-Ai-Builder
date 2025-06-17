import React, { memo, useEffect, useState } from "react";
import { Button } from "./button";
import { useForm } from "react-hook-form";
import FormField from "./FormField ";
import { LoaderCircle } from "lucide-react";
import ImproveWithAI from "../ImproveWithAI";

const Form = (Param) => {
  const {
    onSubmit,
    onLiveUpdate,
    inputs,
    ShowAiButton,
    title,
    isLoading,
    showSaveBtn,
    className,
    defaultValues,
    isEditing,

    onCreate,
  } = Param;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  const stepSelected = Number(localStorage.getItem("steps"));

  const summary = watch("summary");
  const workExperience = watch("projectdetails");
  const skills = watch("skills");

  const [contentType, setContentType] = useState("");

  useEffect(() => {
    if (stepSelected === 1) {
      setContentType("summary");
    } else if (stepSelected === 2) {
      setContentType("projectdetails");
    } else if (stepSelected === 4) {
      setContentType("skills");
    }
  }, [stepSelected]);
  const chooseValue = () => {
    switch (stepSelected) {
      case 1:
        return summary;
      case 2:
        return workExperience;
      case 4:
        return skills;
      default:
        return "No data available";
    }
  };

  // Reset form based on editing state
  useEffect(() => {
    if (isEditing && defaultValues) {
      reset(defaultValues);
    } else if (onCreate) {
      reset(defaultValues);
    }
  }, [isEditing, defaultValues]);

  // Handle live updates
  useEffect(() => {
    const subscription = watch((data) => {
      if (onLiveUpdate) {
        onLiveUpdate(data);
      }
    });
    return () => subscription.unsubscribe();
  }, [onLiveUpdate, watch]);

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex justify-between">
          <h1 className="">{title}</h1>
        </div>
        <ul className="space-y-3">
          {inputs?.map((input, index) => (
            <FormField
              {...input}
              register={register}
              errors={errors}
              key={index}
            />
          ))}
        </ul>
        <div className="flex justify-end mt-3 gap-2 flex-col xl:flex-row mb-3 ">
          {showSaveBtn && isEditing ? (
            <Button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                " update"
              )}
            </Button>
          ) : (
            <Button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          )}

          {ShowAiButton && (
            <ImproveWithAI
              inputValue={chooseValue()}
              contentType={contentType}
              filedName={contentType}
              onUpdateValues={(response) => {
                setValue(contentType, response);
              }}
            ></ImproveWithAI>
          )}
        </div>
      </form>
    </div>
  );
};

export default memo(Form);
