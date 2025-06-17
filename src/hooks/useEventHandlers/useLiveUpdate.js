const useLiveUpdate = ({
  isEditing,
  selectedIndex,
  ApiGetFunction,
  onLiveUpdate,
}) => {
  const handleLiveUpdate = (data) => {
    if (data) {
      // If editing existing section , merge with existing data
      if (isEditing && ApiGetFunction && selectedIndex !== null) {
        const Update = {
          ...ApiGetFunction[selectedIndex],
          ...data,
        };
        onLiveUpdate(Update);
      } else {
        // If adding new, just pass the data
        onLiveUpdate(data);
      }
    }
  };

  return { handleLiveUpdate };
};

export default useLiveUpdate;
