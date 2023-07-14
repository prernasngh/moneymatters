import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/form";
import IncomeItem from "../IncomeItem/incomeItem";
import ExpenseForm from "./expenseForm";
import { rupee } from "../../utils/icons";

function Expense() {
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpense } =
    useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses:</h1>
        <h2 className="total-expense">
          Total Expense:{" "}
          <span>
            {rupee}&ensp;
            {totalExpense()}
          </span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((expense) => {
              const { id, title, amount, date, category, description, type } =
                expense;
              console.log(expense);
              return (
                <IncomeItem
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="red"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}
const ExpenseStyled = styled.div`
  h1 {
    font-size: 2.8rem;
  }
  display: flex;
  overflow: auto;
  .total-expense {
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* background: #d6a2e8; */}
    background: #f9c0f1;
    border: 2px solid #d6a2e8;
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: red;
    }
  }

  .total-expense:hover {
    cursor: pointer;
    /* transform: scale(1.08); */
    transform: translate(0, -0.6rem);
    transition: all 1s ease;
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expense;
