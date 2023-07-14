import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/form";
import IncomeItem from "../IncomeItem/incomeItem";
import { rupee } from "../../utils/icons";

function Income() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes:</h1>
        <h2 className="total-income">
          Total Income:
          <span>
            {rupee}&ensp;
            {totalIncome()}
          </span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { id, title, amount, date, category, description, type } =
                income;
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
                  indicatorColor="green"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}
const IncomeStyled = styled.div`
  h1 {
    font-size: 2.8rem;
  }
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    background: #ffcff9;
    background: #f9c0f1;
    border: 2px solid #d6a2e8;
    color: black;
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: green;
    }
  }
  .total-income:hover {
    cursor: pointer;
    /* transform: scale(1.08);*/
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

export default Income;
