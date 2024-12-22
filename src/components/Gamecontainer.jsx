import React from "react";
import styled from "styled-components";
import deps from "../scssDeps/deps";

import cross from "../assets/cross.png";
import circle from "../assets/circle.png";

const Gamewrapper = styled.section`
  min-height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 125px);
  grid-template-rows: repeat(3, 125px);
  place-content:center;
  gap: 15px;

  @media (max-width: 426px) {
    grid-template-columns: repeat(3, 121px);
    grid-template-rows: repeat(3, 121px);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
  }
`;
const Blockwrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${deps.primary_clr_ac1};
  border-radius: 15px;
  user-select: none;
  box-shadow: -1px 5px ${deps.primary_clr_ac2};

  img {
    height: 70px;
    width: 70px;
  }
`;

const Blockcell = (props) => {
    const { value, index, handleblocks } = props;
    return (
        <Blockwrapper onClick={() => {
            handleblocks(index)

        }}>
            {value == 0 ? "" : <img src={value == 1 ? cross : circle} />}
        </Blockwrapper>
    );
};

function Gamecontainer(props) {
    const { blocks, handleblocks } = props;

    return (
        <Gamewrapper>
            {blocks.map((block, index) => {
                return (
                    <Blockcell
                        key={index}
                        value={block}
                        index={index}

                        handleblocks={handleblocks}
                    />
                );
            })}
        </Gamewrapper>
    );
}

export default Gamecontainer;
