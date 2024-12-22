import React from "react";
import styled from "styled-components";
import deps from "../scssDeps/deps";

const Scorecontainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  gap: 15px;

  @media (max-width:376px){
    grid-template-columns: repeat(3, 100px);
  }
`;

const Cards = styled.div`
    background-color: ${(props) => {
        switch (props.varient) {
            case "player":
                return `${deps.secondary_clr_1}`;

            case "tie":
                return `${deps.secondary_clr_2}`;

            case "cpu":
                return `${deps.secondary_clr_3}`;

            default:
                return `${deps.secondary_clr_2}`;
        }
    }};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  color: #000;
  margin-top: 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;

  @media (max-width:376px){
    margin-top:0px;
  }

  p {
    margin: 0;

    @media (max-width: 419px) {
      font-size: 0.7rem;
    }

    span {
      font-size: 1.25rem;
      font-weight: 700;

      @media (max-width: 376px) {
        font-size: 1rem;
      }

      @media (max-width: 426px) {
        font-size: 1rem;
      }
    }
  }
`;

function Scorebar(props) {
    const { xwins, owins, tie, turn } = props;

    return (
        <Scorecontainer>
            <Cards varient={"player"}>
                <p>
                    {turn==1?"X":"O"} (player 1)
                    <br /> <span>{xwins}</span>
                </p>
            </Cards>
            <Cards varient={"tie"}>
                <p>
                    TIE <br /> <span>{tie}</span>
                </p>
            </Cards>
            <Cards varient={"cpu"}>
                <p>
                    {turn==1?"O":"X"} (player 2)
                    <br /> <span>{owins}</span>
                </p>
            </Cards>
        </Scorecontainer>
    );
}

export default Scorebar;
