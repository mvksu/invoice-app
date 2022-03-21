import { Action } from "./actions"
import { ActionType } from "./actions-types";

interface formState {
  isOpen: boolean;
  isEdit: boolean;
}

const initialState: formState = {
  isOpen: false,
  isEdit: false
}

function formReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case ActionType.OPEN_FORM:
      return { isOpen: true, isEdit: false };
    case ActionType.CLOSE_FORM:
      return { isOpen: false, isEdit: false };
    case ActionType.OPEN_FORM_EDIT:
      return { isOpen: true, isEdit: true };
    case ActionType.CLOSE_FORM_EDIT:
      return { isOpen: false, isEdit: false };
    default:
      return state;
  }
}

export default formReducer;
