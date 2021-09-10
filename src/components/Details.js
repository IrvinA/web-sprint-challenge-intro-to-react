import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
    h2 {
        color: black;
        border-bottom: 2px solid black;
    }
    p {
        color: yellow;
    }
`

export default function Details(props) {
    const { details, close } = props
    const [openDetails, setOpenDetails] = useState(null)

    useEffect(() => {
        axios.get(`${details.url}`)
            .then(res => {setOpenDetails(res.data)})
            .catch(err => {console.log(err)})
    }, [details])

    return (
        <StyledDiv>
            <h2>Character Information:</h2>
            {
                openDetails &&
                <>
                    <h3>Name: {openDetails.name}</h3>
                    <p>
                        Gender: {openDetails.gender}<br></br>
                        Height: {openDetails.height}
                    </p>
                </>
            }
            <button onClick={close}>Close</button>
        </StyledDiv>
    )
}