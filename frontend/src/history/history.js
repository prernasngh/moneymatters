import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/globalContext";
import { rupee } from "../utils/icons";

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2>Recent Transaction History:</h2>
      {history.map((item) => {
        const { id, title, amount, type } = item;
        return (
          <div key={id} className="history-item">
            <p style={{ color: type === "income" ? "green" : "red" }}>
              {title}
            </p>
            <p style={{ color: type === "income" ? "green" : "red" }}>
              {type === "income"
                ? `+${amount <= 0 ? 0 : amount}`
                : `-${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 2.2rem;
    text-align: center;
    color: white;
    color: #badc58;
  }
  h2:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 1s ease;
  }
  .history-item {
    background: #c7ecee;

    border: 2px solid black;
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .history-item:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 1s ease;
  }
`;

export default History;
