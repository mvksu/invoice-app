import * as yup from "yup";

let schema = yup.object().shape({
    userInfo: yup.object({
        street: yup.string().required('required'),
        city: yup.string().required('required'),
        country: yup.string().required('required'),
        postCode: yup.string().required('required'),
    }),
    clientInfo: yup.object({
        name: yup.string().required('required'),
        email: yup.string().email("enter valid email").required('required'),
        street: yup.string().required('required'),
        city: yup.string().required('required'),
        country: yup.string().required('required'),
        postCode: yup.string().required('required'),
    }),
    paymentTerms: yup.string().required('required'),
    desc: yup.string(),
    // status: yup.string().required('required'),
    itemsList: yup.array().of(yup.object({
        name: yup.string().required('required'),
        price: yup.number().positive("price must be positive"),
        qty: yup.number().positive("qty must be positive")
    })),
})

export default schema;