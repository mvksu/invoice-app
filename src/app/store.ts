import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoice/invoiceReducer";
import filterReducer from "../features/filterReducer/filterReducer";
import logger from "redux-logger";
import formReducer from "../features/formReducer/formReducer";

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
    filterMethod: filterReducer,
    form: formReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
