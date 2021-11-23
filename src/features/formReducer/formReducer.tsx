function formReducer(
  state = {
    isOpen: false,
    isEdit: false,
  },
  action: any
) {
  switch (action.type) {
    case "OPEN_FORM":
      return { isOpen: true, isEdit: false };
    case "CLOSE_FORM":
      return { isOpen: false, isEdit: false };
    case "OPEN_FORM_EDIT":
      return { isOpen: true, isEdit: true };
    case "CLOSE_FORM_EDIT":
      return { isOpen: false, isEdit: false };
    default:
      return state;
  }
}

export default formReducer;
