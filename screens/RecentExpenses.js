import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Last 7 period" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
