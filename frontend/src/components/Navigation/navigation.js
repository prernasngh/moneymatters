import React, { useState } from "react";
import styled from "styled-components";
import userpic from "../../img/girl.png";
import { signout } from "../../utils/icons";
import { menuItems } from "../../utils/menuitems";

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user">
        <img src={userpic} alt="" />
        <div className="text">
          <h1>
            <b>Prerna</b>
          </h1>
          <p>Student</p>
        </div>
      </div>
      <ul className="menu">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>{signout}Sign Out</li>
      </div>
    </NavStyled>
  );
}
const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  /* background: #f8efba;

  background: #182c61; */

  background: black;

  border: 3px solid black;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border: 2px solid black;
      border-radius: 50%;
      padding: 0rem;
    }
    h1 {
      color: white;
      font-weight: bolder;
      font-size: 2.5rem;
    }
    h1:hover {
      cursor: pointer;
      transform: scale(1.08);
      transition: all 1s ease;
      color: white;
    }
    p {
      color: #f8efba;
      font-size: 1.2rem;
    }
  }

  .user img:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 1s ease;
  }
  .menu {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;

      color: #182c61;

      color: white;
      padding-left: 1rem;
      position: relative;
      font-size: 1.8rem;
    }

    li:hover {
      cursor: pointer;
      transform: scale(1.08);
      transition: all 1s ease;
      color: #f8efba;
    }
  }
  .active {
    color: #ff793f !important;

    transform: scale(1.2);
    font-weight: bolder;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      /* background: #222260; */
      background: black;
      border-radius: 0 10px 10px 0;
    }
  }
  .bottom-nav {
    color: white;
    font-size: 1.5rem;
  }
  .bottom-nav:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: all 1s ease;
    color: red;
  }
`;

export default Navigation;
