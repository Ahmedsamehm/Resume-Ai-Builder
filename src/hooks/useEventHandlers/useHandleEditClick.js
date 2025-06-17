import { useEffect, useState } from "react";

const useHandleEditClick = ({ ApiGetFunction }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [onCreate, setOnCreate] = useState(true);
  const [currentId, setCurrentId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formValues, setFormValues] = useState({});

  // When user clicks the edit button:
  // - Check if editing mode is active and a valid index is selected
  // - Get the selected item from the API response array using selectedIndex
  // - Set the form values with that item to populate all shared form sections (e.g. Personal Info, Work Experience)
  // - Disable the create mode
  // If not editing:
  // - Reset form values to empty
  // - Enable create mode

  useEffect(() => {
    if (isEditing && selectedIndex !== null && ApiGetFunction) {
      const selectedItem = ApiGetFunction[selectedIndex];
      if (selectedItem) {
        setFormValues(selectedItem);
        setOnCreate(false);
      }
    } else {
      setFormValues({});
      setOnCreate(true);
    }
  }, [isEditing, selectedIndex, ApiGetFunction, onCreate]);

  const handleEditClick = (data, index) => {
    setIsEditing(true);
    setOnCreate(false);
    setSelectedIndex(index);
    setCurrentId(data?.id);
    setFormValues(data);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setOnCreate(true);
    setCurrentId(null);
    setSelectedIndex(null);
    setFormValues({});
  };

  return {
    handleEditClick,
    handleCancelEdit,
    isEditing,
    currentId,
    selectedIndex,
    formValues,
    onCreate,
  };
};

export default useHandleEditClick;
