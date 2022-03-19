import {  ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";
import filterReducer from "./filter/filterReducer";
import invoiceReducer from "./invoice/invoiceReducer";
import formReducer from './form/formReducer';
import { createMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";


const composeEnhancers =  compose;

const combinedReducers = combineReducers({
  invoices: invoiceReducer,
  filterMethod: filterReducer,
  form: formReducer
});

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(thunk, createMiddleware(), logger))
);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
