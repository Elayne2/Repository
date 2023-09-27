const actions = {
    handleInputChange: (event) => {
      const { name, value } = event.target;
      return { type: "HANDLE_INPUT_CHANGE", payload: { name, value } };
    },
  
    handleSubmit: (event) => {
      event.preventDefault();
      return { type: "HANDLE_SUBMIT" };
    },
  
    handleEdit: (index) => {
      return { type: "HANDLE_EDIT", payload: index };
    },
  
    handleDelete: (id) => {
      return { type: "HANDLE_DELETE", payload: id };
    },
  };
  
  export { actions };
  