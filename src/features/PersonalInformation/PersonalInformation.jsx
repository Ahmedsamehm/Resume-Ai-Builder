import React, { memo } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/ui/Form";
import { Button } from "../../components/ui/button";

import useHandleEditClick from "../../hooks/useEventHandlers/useHandleEditClick";
import useLiveUpdate from "../../hooks/useEventHandlers/useLiveUpdate";
import useHandleSubmit from "../../hooks/useEventHandlers/useHandleSubmit";
import useUpdate from "../../hooks/useCRUD/useUpdate";
import useAdd from "../../hooks/useCRUD/useAdd";
import useGetData from "../../hooks/useCRUD/useGetData";
import PersonalInputs from "../../data/PersonalInputs";
import { ConfigApiContext } from "../../context/ConfigApiContext";

const PersonalInformation = ({ onLiveUpdate }) => {

  
  const { id } = useParams();
  // Form inputs
  const { inputs } = PersonalInputs();

  const { fetchingPersonalInfoObj, updatePersonalInfoObj, addPersonalInfoObj } =
    ConfigApiContext();
  // Config objects

  // Hooks
  const { data: PersonalInformation, isPending: isPendingFetchData } =
    useGetData(fetchingPersonalInfoObj);

  const { updateMutation, isPending: isUpdating } = useUpdate(
    updatePersonalInfoObj
  );
  const { addMutation, isPending } = useAdd(addPersonalInfoObj);

  const {
    handleEditClick,
    handleCancelEdit,
    isEditing,
    currentId,
    selectedIndex,
    formValues,
    onCreate,
  } = useHandleEditClick({
    ApiGetFunction: PersonalInformation,
    isPendingFetchData,
  });

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
    ApiGetFunction: PersonalInformation,
    onLiveUpdate,
  });

  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <Form
        inputs={inputs}
        title="Personal Information"
        onSubmit={handleSubmit}
        isLoading={isPending || isUpdating}
        showSaveBtn={true}
        onLiveUpdate={handleLiveUpdate}
        defaultValues={formValues}
        isEditing={isEditing}
        className="w-full"
        ShowAiButton={true}
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
        PersonalInformation?.length !== 0 && (
          <Button
            size="sm"
            onClick={() => handleEditClick(PersonalInformation[0], 0)}
            variant="outline"
            disabled={isPendingFetchData}
          >
            Edit
          </Button>
        )
      )}
    </div>
  );
};

export default memo(PersonalInformation);
