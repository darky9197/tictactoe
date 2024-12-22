import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import deps from "./scssDeps/deps";
import Actionbar from "./components/Actionbar";
import Gamecontainer from "./components/Gamecontainer";
import Scorebar from "./components/Scorebar";
import Mainmenu from "./components/Mainmenu";
import Winstate from "./components/Winstate";

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${deps.primary_clr};
  color: #fff;
  font-family: ${deps.primary_txt};
  min-height: 100vh;
`;

function App() {
  const [blocks, setBlocks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [xwins, setxwins] = useState(0);
  const [owins, setowins] = useState(0);
  const [tie, settie] = useState(0);
  const [turn, setturn] = useState(1);
  const [newturn,setNewturn] = useState(1);
  const [winstate, setwinsate] = useState('x');
  const [changer,setChanger] = useState(0);

  function handleturn() {
    let val = turn;
    if (turn == 1) val = 2
    else val = 1
    setturn(val)
  }

  function handleNewturn() {
    let val = newturn;
    if (newturn == 1) val = 2
    else val = 1
    setNewturn(val)
  }

  function clearall() {
    setBlocks([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    console.clear()
    setturn(1)
  }

  function handleblocks(index) {
    let arr = [...blocks];
    arr[index] = turn == 1 ? 1 : 2;
    setBlocks(arr);
    handleturn();
  }

  function wincheck() {
    if ((blocks[0] == 1 && blocks[1] == 1 && blocks[2] == 1) || (blocks[3] == 1 && blocks[4] == 1 && blocks[5] == 1) || (blocks[6] == 1 && blocks[7] == 1 && blocks[8] == 1) || (blocks[0] == 1 && blocks[4] == 1 && blocks[8] == 1) || (blocks[2] == 1 && blocks[4] == 1 && blocks[6] == 1) || (blocks[0] == 1 && blocks[3] == 1 && blocks[6] == 1) || (blocks[1] == 1 && blocks[4] == 1 && blocks[7] == 1) || (blocks[2] == 1 && blocks[5] == 1 && blocks[8] == 1)) {
      console.log('x wins');
      setxwins(prev => prev + 1);
      setwinsate('x');
      setChanger(1)
    }
    if ((blocks[0] == 2 && blocks[1] == 2 && blocks[2] == 2) || (blocks[3] == 2 && blocks[4] == 2 && blocks[5] == 2) || (blocks[6] == 2 && blocks[7] == 2 && blocks[8] == 2) || (blocks[0] == 2 && blocks[4] == 2 && blocks[8] == 2) || (blocks[2] == 2 && blocks[4] == 2 && blocks[6] == 2) || (blocks[0] == 2 && blocks[3] == 2 && blocks[6] == 2) || (blocks[1] == 2 && blocks[4] == 2 && blocks[7] == 2) || (blocks[2] == 2 && blocks[5] == 2 && blocks[8] == 2)) {
      console.log('o wins');
      setowins(prev => prev + 1);
      setwinsate('o');
      setChanger(1)
    }

    if ((blocks[0] != 0 && blocks[1] != 0 && blocks[2] != 0 && blocks[3] != 0 && blocks[4] != 0 && blocks[5] != 0 && blocks[6] != 0 && blocks[7] != 0 && blocks[8] != 0)) {
      settie(prev => prev + 1);
    }
  }

  useEffect(() => {
    wincheck()
  }, blocks)

  return (
    <MainContainer>
      <div className="game-wrapper">
        <Actionbar clear={clearall} turn={turn} />
        <Gamecontainer blocks={blocks} handleblocks={handleblocks} />
        <Scorebar xwins={xwins} owins={owins} tie={tie} turn={newturn}/>
      </div>

      <Winstate winstate={winstate} changer={changer} setChanger={setChanger} handlematchturn={handleNewturn} clear={clearall}/>
    </MainContainer>
  );
}

export default App;
