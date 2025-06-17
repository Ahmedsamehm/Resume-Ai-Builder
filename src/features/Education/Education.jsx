import React from "react";
import { useParams } from "react-router-dom";

import Form from "../../components/ui/Form";
import { Button } from "../../components/ui/button";

import useHandleEditClick from "../../hooks/useEventHandlers/useHandleEditClick";
import useHandleSubmit from "../../hooks/useEventHandlers/useHandleSubmit";
import useLiveUpdate from "../../hooks/useEventHandlers/useLiveUpdate";
import useAdd from "../../hooks/useCRUD/useAdd";
import useUpdate from "../../hooks/useCRUD/useUpdate";
import useGetData from "../../hooks/useCRUD/useGetData";

import EducationInputs from "../../data/EducationInputs";
import { ConfigApiContext } from "../../context/ConfigApiContext";

function Education({ onLiveUpdate }) {
  // Form inputs
  const { inputs } = EducationInputs();
  // Config objects
  const {
    fetchingEducationObj,
    addEducationObj,
    updateEducationObj,
  } = ConfigApiContext();

  const { id } = useParams();

  // Hooks
  const { data: Education, isPending: isLoaded } = useGetData(fetchingEducationObj);

  const {
    handleEditClick,
    handleCancelEdit,
    isEditing,
    currentId,
    selectedIndex,
    onCreate,
    formValues,
  } = useHandleEditClick({ ApiGetFunction: Education });

  const { addMutation, isPending } = useAdd(addEducationObj);
  const { updateMutation, isPending: isUpdating } = useUpdate(updateEducationObj);

  const { handleSubmit } = useHandleSubmit({
    isEditing,
    currentId,
    handleCancelEdit,
    AddFunction: addMutation,
    updateFunction: updateMutation,
    id,
  });

  const { handleLiveUpdate } = useLiveUpdate({
    isEditing,
    selectedIndex,
    ApiGetFunction: Education,
    onLiveUpdate,
  });

  return (
    <>
      <Form
        isLoading={isPending || isLoaded}
        inputs={inputs}
        onSubmit={handleSubmit}
        title={isEditing ? "Edit Education" : "Add Education"}
        showSaveBtn={true}
        onLiveUpdate={handleLiveUpdate}
        defaultValues={formValues}
        isEditing={isEditing}
        className="p-5 flex justify-center items-center"
        handleCancelEdit={handleCancelEdit}
        ShowAiButton={false}
        Rest={true}
        onCreate={onCreate}
      />
      {isEditing ? (
        <div className="flex justify-center mt-2">
          <Button
            variant="outline"
            onClick={handleCancelEdit}
            className="mx-auto"
          >
            Cancel Editing
          </Button>
        </div>
      ) : (
        Education.length !== 0 && (
          <Button
            size="lg"
            onClick={() => handleEditClick(Education[0], 0)}
            variant="outline"
            disabled={isLoaded}
            className="mx-auto flex"
          >
            Edit
          </Button>
        )
      )}
    </>
  );
}

export default Education;
