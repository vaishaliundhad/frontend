//AddExpense Reducer
  const AddReducer = (state, action) => {

  switch (action.type) {
      case 'SET_DESCRIPTION':
          return { ...state, description: action.payload };
      case 'SET_AMOUNT':
          return { ...state, amount: action.payload };
      case 'SET_CATEGORY':
          return { ...state, category: action.payload };
      case 'RESET_DATA':
          return { description: "", amount: "", category: "" }
      default:
          return state;
  }

}
// Edit Expense Reducer
export const EditReducer = (state, action) => {
    switch (action.type) {
        case 'EDIT_TASK':
            return state.map((curtask) => 
                curtask.id === action.oldValue.id ? action.newValue : curtask
            );

        case 'REMOVE_TASK':
            return state.filter((curtask) => curtask.id !== action.value.id); 

        case 'CLEAR_ALL':
            return [];

        default:
            return state;
    }
};



export default AddReducer