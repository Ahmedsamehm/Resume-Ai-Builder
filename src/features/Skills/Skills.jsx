import React from "react";
import { useParams } from "react-router-dom";

import { Button } from "../../components/ui/button";
import Form from "../../components/ui/Form";
import useAdd from "../../hooks/useCRUD/useAdd";
import useUpdate from "../../hooks/useCRUD/useUpdate";
import useDelete from "../../hooks/useCRUD/useDelete";
import useHandleSubmit from "../../hooks/useEventHandlers/useHandleSubmit";
import useHandleEditClick from "../../hooks/useEventHandlers/useHandleEditClick";
import useLiveUpdate from "../../hooks/useEventHandlers/useLiveUpdate";
import useHandleDelete from "../../hooks/useEventHandlers/useHandleDelete";
import useGetData from "../../hooks/useCRUD/useGetData";

import SkillsInputs from "../../data/SkillsInputs";
import { ConfigApiContext } from "../../context/ConfigApiContext";

function Skills({ onLiveUpdate }) {
  // Config objects
  const { fetchingSkillsObj, addSkillsObj, updateSkillsObj, deleteSkillsObj } =
    ConfigApiContext();

  const { id } = useParams();

  // Hooks
  const { data: skillList, isPending: skillsLoading } =
    useGetData(fetchingSkillsObj);

  const { addMutation, isPending } = useAdd(addSkillsObj);
  const { updateMutation, isPending: isUpdating } = useUpdate(updateSkillsObj);
  const { deleteMutation, isPending: isDeleting } = useDelete(deleteSkillsObj);

  const {
    handleEditClick,
    handleCancelEdit,
    isEditing,
    currentId,
    selectedIndex,
    formValues,
    onCreate,
  } = useHandleEditClick({
    ApiGetFunction: skillList,
    skillsLoading,
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
    ApiGetFunction: skillList?.skill,
    onLiveUpdate,
  });

  const { handleDelete, deletingId } = useHandleDelete({
    handleCancelEdit,
    ApiDeleteFunction: deleteMutation,
    currentId,
  });
  // Form input definition
  const { inputs } = SkillsInputs(isEditing);
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <p className="text-white mb-4">
        Add skills that showcase your strengths and expertise.
      </p>

      {/* Skills Form */}
      <Form
        inputs={inputs}
        title={isEditing ? "Update Skill" : "Add Skill"}
        onSubmit={handleSubmit}
        isLoading={isEditing ? isDeleting : isPending || isUpdating}
        showSaveBtn={true}
        defaultValues={formValues}
        isEditing={isEditing}
        className="border p-4 rounded-md "
        ShowAiButton={true}
        Rest={true}
        onLiveUpdate={handleLiveUpdate}
        onCreate={onCreate}
      />

      {/* Cancel Edit Button */}
      {isEditing && (
        <div className="flex justify-center mt-2">
          <Button
            variant="outline"
            onClick={handleCancelEdit}
            className="mx-auto"
          >
            Cancel Editing
          </Button>
        </div>
      )}

      {/* Skills List */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3">Your Skills</h3>

        {skillsLoading ? (
          <p className="text-center text-gray-500">Loading skills...</p>
        ) : skillList?.length === 0 ? (
          <p className="text-center text-gray-500">
            No skills added yet. Add skills to enhance your resume.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto">
            {skillList?.map((skill, index) => (
              <div
                key={skill?.id}
                className={`p-3 rounded-md border flex justify-between items-center ${
                  currentId === skill?.id
                }`}
              >
                <span className="text-sm ">{skill?.skill}</span>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditClick(skill, index)}
                    disabled={isEditing && currentId !== skill?.id}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(skill?.id)}
                    disabled={deletingId === skill?.id && isDeleting}
                  >
                    {deletingId === skill?.id && isDeleting
                      ? "Deleting..."
                      : "Delete"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
