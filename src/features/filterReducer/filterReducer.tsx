import { filterTypes } from "../invoice/types"

function filterReducer(state = "all", action: any) {
  switch (action.type) {
    case filterTypes.FILTER_ALL:
      return "all";
    case filterTypes.FILTER_PAID:
      return "paid";
    case filterTypes.FILTER_DRAFT:
      return "draft";
    case filterTypes.FILTER_PENDING:
      return "pending";
    default:
      return state;
  }
}

export default filterReducer;
