import { ActionType } from "./actions-types"

export interface Invoice {
  id: number,
  userInfo: {
    street: string,
    city: string,
    country: string,
    postCode: string,
  },
  clientInfo: {
    name: string,
    email: string,
    street: string,
    country: string,
    postCode: string,
    city: string,
  },
  createdAt: string,
  paymentTerms: string,
  desc: string, 
  status: 'pending' | 'paid' | 'draft',
  itemsList: [
    { name: string, price: number, qty: number },
  ],
}

type Action = {
  type: string;
  payload?: any;
};

type invoiceState = Invoice[]

const initialState: invoiceState = []

function invoiceReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.INVOICE_LIST_REQUEST:
      return state;
    case ActionType.INVOICE_LIST_SUCCESS:
      return action.payload;
    case ActionType.INVOICE_LIST_FAILURE:
      return state;
    case ActionType.INVOICE_CREATE_REQUEST:
      return state;
    case ActionType.INVOICE_CREATE_FAILURE:
      return state;
    case ActionType.INVOICE_CREATE_SUCCESS:
      console.log(action.payload)
      return [...state, action.payload[0]];
    case ActionType.INVOICE_DELETE_REQUEST:
      return state;
    case ActionType.INVOICE_DELETE_FAILURE:
      return state;
    case ActionType.INVOICE_DELETE_SUCCESS:
      return state.filter((invoice) => invoice.id !== parseInt(action.payload.id));
    case ActionType.INVOICE_PAY_SUCCESS:
      return state.map((invoice) => invoice.id === parseInt(action.payload.id) ? { ...invoice, status: 'paid' } : invoice);
    case ActionType.INVOICE_EDIT_SUCCESS:
      return state.map((invoice) => invoice.id === parseInt(action.payload.id) ? action.payload : invoice);
    default:
      return state;
  }
}

export default invoiceReducer;
