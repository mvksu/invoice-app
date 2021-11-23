

const initialState = [
  {
    id: 756473,
    userInfo: {
      street: "Brzozowa 15",
      city: "Brusy",
      country: "Poland",
      postCode: "89-632",
    },
    clientInfo: {
      name: "Andrzej Mickiewicz",
      email: "slowacki@wacki.pl",
      street: "Prosta 15",
      country: "Poland",
      postCode: "99-000",
      city: "Warszawa",
    },
    createdAt: JSON.stringify(new Date()),
    paymentTerms: "next week",
    desc: "12345",
    status: "paid",
    itemsList: [
      { name: "item1", price: 7.0, qty: 1 },
      { name: "item2", price: 1.0, qty: 5 },
    ],
  },
  {
    id: 756474,
    userInfo: {
      street: "Brzozowa 152",
      city: "Warszawa",
      country: "Poland",
      postCode: "89-632",
    },
    clientInfo: {
      name: "Andrzej Kowal",
      email: "slowacki@wacki.pl",
      street: "Prosta 15",
      country: "Poland",
      postCode: "99-000",
      city: "Warszawa",
    },
    createdAt: JSON.stringify(new Date()),
    paymentTerms: "next week",
    desc: "12345",
    status: "draft",
    itemsList: [
      { name: "i1", price: 7.0, qty: 1 },
      { name: "i2", price: 2.0, qty: 5 },
    ],
  },
  {
    id: 756475,
    userInfo: {
      street: "Brzozowa 152",
      city: "Warszawa",
      country: "Poland",
      postCode: "89-632",
    },
    clientInfo: {
      name: "Arkadiusz Pas",
      email: "slowacki@wacki.pl",
      street: "Prosta 15",
      country: "Poland",
      postCode: "99-000",
      city: "Warszawa",
    },
    createdAt: JSON.stringify(new Date()),
    paymentTerms: "next week",
    desc: "12345",
    status: "pending",
    itemsList: [
      { name: "i3", price: 7.0, qty: 3 },
      { name: "i3", price: 1.0, qty: 5 },
    ],
  },
];

type actionType = {
  type: string;
  payload?: any;
};

function invoiceReducer(state = initialState, action: actionType) {
  switch (action.type) {
    case "INVOICE_ADD":
      console.log(action.payload)
      return [...state];
    case "INVOICE_DEL":
      return state.filter((invoice) => invoice.id !== parseInt(action.payload.id));
    default:
      return state;
  }
}

export default invoiceReducer;
