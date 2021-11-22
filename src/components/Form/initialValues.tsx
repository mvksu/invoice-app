const initialValues = {
  userInfo: {
    street: "Dome",
    city: "Brusy",
    country: "",
    postCode: "",
  },
  clientInfo: {
    name: "Cleint",
    email: "",
    street: "",
    country: "",
    postCode: "",
    city: "",
  },
  createdAt: new Date(),
  paymentTerms: "next week",
  desc: "123desc",
  status: "draft",
  itemsList: [
    { name: "21", price: 5.0, qty: 1 },
    { name: "item", price: 5.0, qty: 2 },
  ],
};

export default initialValues;