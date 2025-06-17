import { useState } from "react";

const useHandleDelete = ({
  handleCancelEdit,
  ApiDeleteFunction,
  currentId,
}) => {
  const [deletingId, setDeletingId] = useState(null);
  const handleDelete = (id) => {
    setDeletingId(id);
    ApiDeleteFunction(id).finally(() => {
      setDeletingId(null);
      // If we're deleting the currently edited item, exit edit mode
      if (currentId === id) {
        handleCancelEdit();
      }
    });
  };

  return {
    handleDelete,
    deletingId,
  };
};

export default useHandleDelete;
