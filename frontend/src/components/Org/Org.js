import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

function Org() {
  const { width, height } = useWindowSize();
  console.log(width, height);
  const moveOrg = keyframes`
       0%{
          transform:translate(0,0);
       }
       50%{
          transform:translate(${width}px,${height / 2}px);
       }
       100%{
          transform:translate(0,0);
       }
    `;
  const Orgstyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    margin-left: -37vh;
    margin-top: -37vh;
    border-radius: 50%;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(400px);
    animation: ${moveOrg} 15s alternate linear infinite;
  `;
  return <Orgstyled></Orgstyled>;
}
export default Org;
