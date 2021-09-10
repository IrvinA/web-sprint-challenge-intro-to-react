// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    color: Black;
    font-weight: 700;
    border: 1px solid black;
    margin: 0 15%;
    padding: 1% 0;
    border-radius: 5px;
    opacity: 80%;
    padding-top: 2%;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
        background-color: white;
    }
    p {
        margin-left: 5%;
        border: 1px solid blue;
        text-shadow: 2px 2px 4px lime;
        background-image: linear-gradient(to left, black, white 50%, white);
        border-radius: 5px;
        padding: .5% 1%;
    }
    button {
        background-image: linear-gradient(to left, darkgreen, white 50%, darkblue);
        color: black;
        text-shadow: 2px 2px 4px lime;
        font-weight: 600;
        border-radius: 10px;
        margin-right: 5%;
        padding: 1% .5%;
        &:hover{
            transition: all 1s ease-in-out;
            background-image: linear-gradient(to right, darkred, black 50%, darkblue);
            color: white;
        }
    }
`

export default function Character({ data, open }) {
    return (
        <StyledDiv>
            <p>{data.name}</p>
            <button onClick={() => open(data)}>
                Character Details
            </button>
        </StyledDiv>
    )
}