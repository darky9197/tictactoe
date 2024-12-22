import React from "react";
import styled from "styled-components";

import deps from "../scssDeps/deps";
import cross from "../assets/cross.png";
import circle from "../assets/circle.png";

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 0px;
  margin-bottom:1rem;

  @media (max-width:376px){
    margin-bottom:0px;
    padding:0px .5rem;
  }
`;

const Actionstatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  background-color: ${deps.primary_clr_ac1};
  width:125px;
  padding: 0.5em 1.75rem;
  border-radius: 5px;
  user-select: none;
  box-shadow: -1px 5px ${deps.primary_clr_ac2};

  span {
    font-weight: 800;
    font-size: 1.4rem;
    
  }
`;

function Actionbar(props) {
    const { clear,turn } = props;

    return (
        <ActionContainer>
            <div className="actionbar-icons">
                <img src={cross} draggable="false" />
                <img src={circle} draggable="false" />
            </div>

            <Actionstatus>
                <span>{turn==1?"X":"O"}</span>
                Turn
            </Actionstatus>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={clear}
                className="restart-arrow"
            >
                <path
                    fill-rule="evenodd"
                    d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                    clip-rule="evenodd"
                />
            </svg>
        </ActionContainer>
    );
}

export default Actionbar;
