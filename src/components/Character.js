// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: black;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
        background-color: white;
    }
    button {
        background-image: linear-gradient(to left, darkred, white 50%, darkblue);
        color: black;
        font-weight: 600;
        border-radius: 10px;
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
            {data.name}
            <button onClick={() => open(data)}>
                Character Details
            </button>
        </StyledDiv>
    )
}