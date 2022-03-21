import { ActionType } from "./actions-types"

interface OpenFormAction {
  type: ActionType.OPEN_FORM,
  payload?: boolean
}

interface CloseFormAction {
  type: ActionType.CLOSE_FORM,
  payload?: boolean
}

interface OpenFormEditAction {
  type: ActionType.OPEN_FORM_EDIT,
  payload?: boolean
}

interface CloseFormEditAction {
  type: ActionType.CLOSE_FORM_EDIT,
  payload?: boolean
}

export type Action = OpenFormAction | CloseFormAction | CloseFormEditAction | OpenFormEditAction
