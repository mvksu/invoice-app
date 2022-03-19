import { createAction } from "redux-api-middleware";
import { ActionType } from "./actions-types"

export const getInvoices = () => {
    return createAction({
        endpoint: "http://localhost:5000/invoices",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        types: [
            ActionType.INVOICE_LIST_REQUEST,
            {
                type: ActionType.INVOICE_LIST_SUCCESS,
                payload: async (action: any, state: any, res: any) => {
                    const data = await res.json();
                    return data;
                },
                meta: { actionType: ActionType.INVOICE_LIST_SUCCESS },
            },
            ActionType.INVOICE_LIST_FAILURE,
        ],
    });
};

export const addInvoice = (invoice: any) => {
    console.log(invoice)
    return createAction({
        endpoint: "http://localhost:5000/invoices",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(invoice),
        types: [
            ActionType.INVOICE_CREATE_REQUEST,
            {
                type: ActionType.INVOICE_CREATE_SUCCESS,
                payload: async (action: any, state: any, res: any) => {
                    const data = await res.json();
                    console.log(data)
                    return data;
                },
                meta: { actionType: ActionType.INVOICE_CREATE_SUCCESS },
            },
            ActionType.INVOICE_CREATE_FAILURE,
        ],
    });
};

export const editInvoice = (invoice: any) => {
    console.log(invoice)
    return createAction({
        endpoint: `http://localhost:5000/invoices/${invoice.id}`,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(invoice),
        types: [
            ActionType.INVOICE_EDIT_REQUEST,
            {
                type: ActionType.INVOICE_EDIT_SUCCESS,
                payload: async (action: any, state: any, res: any) => {
                    const data = await res.json();
                    return data;
                },
                meta: { actionType: ActionType.INVOICE_EDIT_SUCCESS },
            },
            ActionType.INVOICE_EDIT_FAILURE,
        ],
    });
};


export const deleteInvoice = (id: any) => {
    return createAction({
        endpoint: `http://localhost:5000/invoices/${id}`,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        types: [
            ActionType.INVOICE_DELETE_REQUEST,
            ActionType.INVOICE_DELETE_SUCCESS,
            ActionType.INVOICE_DELETE_FAILURE,
        ],
    });
};

export const payInvoice = (id: any) => {
    return createAction({
        endpoint: `http://localhost:5000/invoices/pay/${id}`,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        types: [
            ActionType.INVOICE_PAY_REQUEST,
            ActionType.INVOICE_PAY_SUCCESS,
            ActionType.INVOICE_PAY_FAILURE,
        ],
    });
};