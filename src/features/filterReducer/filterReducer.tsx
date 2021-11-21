function filterReducer(state = "all", action: any) {
  switch (action.type) {
    case "FILTER_ALL":
      return "all";
    case "FILTER_PAID":
      return "paid";
    case "FILTER_DRAFT":
      return "draft";
    case "FILTER_PENDING":
      return "pending";
    default:
      return state;
  }
}

export default filterReducer;
