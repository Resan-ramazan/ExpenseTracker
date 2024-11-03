import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

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

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.contatiner}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
