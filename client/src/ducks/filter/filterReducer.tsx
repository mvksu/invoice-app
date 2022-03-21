import { ActionType } from "./actions-types"
import { Action } from "./actions"


function filterReducer(state = "all", action: Action) {
  switch (action.type) {
    case ActionType.FILTER_ALL:
      return "all";
    case ActionType.FILTER_PAID:
      return "paid";
    case ActionType.FILTER_DRAFT:
      return "draft";
    case ActionType.FILTER_PENDING:
      return "pending";
    default:
      return state;
  }
}

export default filterReducer;
