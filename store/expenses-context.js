import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 66.31,
    date: new Date("2024-11-03"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 24.73,
    date: new Date("2024-01-05"),
  },
  {
    id: "e3",
    description: "Mouse pad",
    amount: 18.71,
    date: new Date("2024-11-04"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 13.21,
    date: new Date("2024-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 21.21,
    date: new Date("2024-02-18"),
  },

  {
    id: "e6",
    description: "A pair of trousers",
    amount: 24.73,
    date: new Date("2024-01-05"),
  },
  {
    id: "e7",
    description: "Mouse pad",
    amount: 18.71,
    date: new Date("2024-11-04"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 13.21,
    date: new Date("2024-02-19"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 21.21,
    date: new Date("2024-02-18"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
      break;
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
      break;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
      break;
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELET", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
