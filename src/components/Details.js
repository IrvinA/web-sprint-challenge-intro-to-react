import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CardBody, Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';

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
        axios.get(`http://swapi.dev/api/people/${details}/`)
            .then(res => {setOpenDetails(res.data)})
            .catch(err => {console.log(err)})
    }, [details])

    return (
        <StyledDiv>
            <Card>
                <CardBody>
                    <CardTitle>Character Information:</CardTitle>
                    <CardSubtitle>Name: {openDetails.name}</CardSubtitle>
                    <CardText>
                        Gender: ${openDetails.gender}<br></br>
                        Height: ${openDetails.height}
                    </CardText>
                    <button onClick={close}>Close</button>
                </CardBody>
            </Card> 
        </StyledDiv>
    )
}