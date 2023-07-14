import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
// import backImg from "./img/backImg.jpg";
import backImg from "./img/violet.jpg";
import { MainLayout } from "./styles/Layout";
import Navigation from "./components/Navigation/Navigation";
import Org from "./components/Org/Org";
import Dashboard from "./components/Dashboard/dashboard";
import Income from "./components/Income/income";
import Expense from "./components/Expense/expense";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expense />;
      default:
        return <Dashboard />;
    }
  };

  const orgMemo = useMemo(() => {
    return <Org />;
  }, []);

  return (
    // <AppStyled backImg={backImg} className="App">
    <AppStyled className="App">
      {orgMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.backImg});
  position: relative;
  main {
    flex: 1;
    /* background: #f8efba; */
    /* background: #f8efba; // ye tha phle wala yellow background
    background: black; */

    background: #f8efba;

    background: #182c61;
    background: black;
    border: 3px solid black;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
    box-shadow: ;
  }
`;
export default App;

