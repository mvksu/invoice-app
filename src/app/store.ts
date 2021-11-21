import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoice/invoiceReducer";
import filterReducer from "../features/filterReducer/filterReducer";


export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
    filterMethod: filterReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
