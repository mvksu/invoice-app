const initialValues = {
  userInfo: {
    street: "",
    city: "",
    country: "",
    postCode: "",
  },
  clientInfo: {
    name: "",
    email: "",
    street: "",
    country: "",
    postCode: "",
    city: "",
  },
  createdAt: new Date(),
  paymentTerms: "next week",
  desc: "123desc",
  status: "pending",
  itemsList: [
    { name: "21", price: 5.0, qty: 1 },
    { name: "item", price: 5.0, qty: 2 },
  ],
};

export default initialValues;