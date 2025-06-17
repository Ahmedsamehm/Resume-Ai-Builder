import Tost from "../../components/Tost";

const useHandleSubmit = ({
  isEditing,
  currentId,
  handleCancelEdit,
  AddFunction,
  updateFunction,
  id,
}) => {
  const handleSubmit = async (formData) => {
    const { TostError } = Tost();
    try {
      if (isEditing && currentId) {
        updateFunction({
          formData,
          currentId,
        });
        handleCancelEdit();
      } else {
        // Add new
        AddFunction({ formData, id });
      }
    } catch (error) {
      console.error("Error handling submit :", error);
      TostError("Error handling submit");
    }
  };
  return {
    handleSubmit,
  };
};

export default useHandleSubmit;
