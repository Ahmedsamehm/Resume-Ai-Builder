import { useParams } from "react-router-dom";

import { Button } from "../../components/ui/button";
import Form from "../../components/ui/Form";

import useHandleEditClick from "../../hooks/useEventHandlers/useHandleEditClick";
import useHandleDelete from "../../hooks/useEventHandlers/useHandleDelete";
import useHandleSubmit from "../../hooks/useEventHandlers/useHandleSubmit";
import useLiveUpdate from "../../hooks/useEventHandlers/useLiveUpdate";
import useAdd from "../../hooks/useCRUD/useAdd";
import useUpdate from "../../hooks/useCRUD/useUpdate";
import useDelete from "../../hooks/useCRUD/useDelete";
import useGetData from "../../hooks/useCRUD/useGetData";

import WorkExperienceInputs from "../../data/WorkExperienceInputs";
import { ConfigApiContext } from "../../context/ConfigApiContext";

function WorkExperience({ onLiveUpdate }) {
  // Form inputs
  const { inputs } = WorkExperienceInputs();
  // Config objects
  const {
    fetchingExperienceObj,
    addExperienceObj,
    updateExperienceObj,
    deleteExperienceObj,
  } = ConfigApiContext();

  const { id } = useParams();

  // Hooks
  const { data: Experience, isPending: isPendingFetchData } = useGetData(
    fetchingExperienceObj
  );
  const { addMutation, isPending } = useAdd(addExperienceObj);
  const { updateMutation, isPending: isUpdating } =
    useUpdate(updateExperienceObj);
  const { deleteMutation, isPending: isDeleting } =
    useDelete(deleteExperienceObj);

  const {
    handleEditClick,
    handleCancelEdit,
    isEditing,
    currentId,
    selectedIndex,
    formValues,
    onCreate,
  } = useHandleEditClick({ ApiGetFunction: Experience });

  const { handleDelete, deletingId } = useHandleDelete({
    handleCancelEdit,
    ApiDeleteFunction: deleteMutation,
    currentId,
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
    ApiGetFunction: Experience,
    onLiveUpdate,
  });

  return (
    <>
      <Form
        title={isEditing ? "Edit Work Experience" : "Add Work Experience"}
        inputs={inputs}
        isLoading={isEditing ? isUpdating : isPending}
        onLiveUpdate={handleLiveUpdate}
        onSubmit={handleSubmit}
        showSaveBtn={true}
        defaultValues={formValues}
        isEditing={isEditing}
        className="p-5 flex justify-center items-center"
        ShowAiButton={true}
        Rest={true}
        onCreate={onCreate}
      />

      {isEditing && (
        <div className="flex justify-center mt-2 ">
          <Button
            variant="outline"
            onClick={handleCancelEdit}
            className="mx-auto"
          >
            Cancel Editing
          </Button>
        </div>
      )}

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Saved Experiences</h3>
        {Experience?.length === 0 && (
          <p className="text-gray-500 text-center">No experiences added yet.</p>
        )}
        <ul>
          {Experience?.map((work, index) => (
            <li
              className={`mb-2 p-3 border rounded-md ${
                currentId === work.id ? "border-blue-500 " : "border-gray-200"
              }`}
              key={work.id || index}
            >
              <div className="flex justify-between items-center mx-auto">
                <div className="flex-1">
                  <span className="font-medium">{work.jobtitle}</span> at{" "}
                  <span className="italic">{work.company}</span>
                  <div className="text-sm text-gray-600 mt-1">
                    {work.location} • {work.duration}
                  </div>
                </div>
                <div className="space-x-2">
                  <Button
                    size="sm"
                    onClick={() => handleEditClick(work, index)}
                    variant="outline"
                    disabled={isEditing && currentId !== work.id}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleDelete(work.id)}
                    variant="destructive"
                    disabled={deletingId === work.id && isDeleting}
                  >
                    {deletingId === work.id && isDeleting
                      ? "Deleting..."
                      : "Delete"}
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default WorkExperience;
