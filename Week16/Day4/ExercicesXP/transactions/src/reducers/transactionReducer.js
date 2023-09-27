const initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem("transactions")) || [],
  };
  
  const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case "HANDLE_INPUT_CHANGE":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
  
      case "HANDLE_SUBMIT":
        const updatedList = state.list.slice();
        if (state.currentIndex === -1) {
          updatedList.push({
            id: new Date().getTime(),
            accountNumber: state.accountNumber,
            FSCname: state.FSCname,
            amount: state.amount,
          });
        } else {
          updatedList[state.currentIndex] = {
            id: updatedList[state.currentIndex].id,
            accountNumber: state.accountNumber,
            FSCname: state.FSCname,
            amount: state.amount,
          };
        }
        localStorage.setItem("transactions", JSON.stringify(updatedList));
        return {
          ...state,
          currentIndex: -1,
          list: updatedList,
        };
  
      case "HANDLE_EDIT":
        return {
          ...state,
          currentIndex: action.payload,
        };
  
      case "HANDLE_DELETE":
        const filteredList = state.list.filter((transaction) => transaction.id !== action.payload);
        localStorage.setItem("transactions", JSON.stringify(filteredList));
        return {
          ...state,
          currentIndex: -1,
          list: filteredList,
        };
  
      default:
        return state;
    }
  };
  
  export default transactionReducer;
  