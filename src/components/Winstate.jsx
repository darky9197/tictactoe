import React from 'react'
import styled from 'styled-components'
import deps from '../scssDeps/deps'

import cross from "../assets/cross.png";
import circle from "../assets/circle.png";

const Maincontainer = styled.section`
    display:${(props) => props.openkey == 1 ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    background-color: #0e222bb7;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
`

const Gamestatemodel = styled.div`
    background-color: ${deps.primary_clr_ac1} ;
    height: 30vh;
    min-width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media( max-height:756px ){
        height: 40vh;
    }

    p{
        color:${deps.secondary_clr_2};
        letter-spacing: 2px;
        font-weight:600;
        margin:0;
    }

    h1{
        display:flex;
        align-items: center;
        gap: 10px;
        margin:20px;
        font-weight:700;
        color: ${(props) => props.state == 'x' ? deps.secondary_clr_1 : deps.secondary_clr_3};
    }
`

const Mbtn = styled.button`
    background-color:${(props) => props.btype == 1 ? deps.secondary_clr_2 : deps.secondary_clr_3};
    padding: .75rem;
    font-weight:700;
    border-radius: 10px;
    user-select: none;
    border: 0px solid;
    color: ${deps.primary_clr_ac2};
    transition: box-shadow 100ms ease-in;
`


function Winstate(props) {
    const { winstate, changer, setChanger, clear, handlematchturn } = props;

    return (
        <Maincontainer openkey={changer}>
            <Gamestatemodel state={winstate}>
                <p>YOU WON!</p>
                <h1>
                    <img src={winstate == 'x' ? cross : circle} height='50' />
                    TAKES THE WIN
                </h1>
                <div className='d-flex gap-2'>
                    <Mbtn btype='1' onClick={() => location.reload()}>QUIT</Mbtn>
                    <Mbtn btype='2' onClick={() => {
                        setChanger(0)
                        clear();
                        handlematchturn()
                    }}>
                        NEXT ROUND</Mbtn>
                </div>
            </Gamestatemodel>
        </Maincontainer>
    )
}

export default Winstate;