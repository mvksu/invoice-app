import { ActionType } from "./actions-types"

interface FilterAll {
  type: ActionType.FILTER_ALL,
  payload?: boolean
}

interface FilterPaid {
  type: ActionType.FILTER_PAID,
  payload?: boolean
}

interface FilterPending {
  type: ActionType.FILTER_PENDING,
  payload?: boolean
}

interface FilterDraft {
  type: ActionType.FILTER_DRAFT,
  payload?: boolean
}

export type Action = FilterAll | FilterPaid | FilterDraft | FilterPending
