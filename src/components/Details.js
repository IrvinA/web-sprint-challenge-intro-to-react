import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card, } from 'reactstrap';

const StyledDiv = styled.div`
    h2 {
        margin: 5% 30% 1%;
        color: black;
        text-shadow: 2px 2px 4px lime;
        border-bottom: 2px solid black;
        font-weight: 700;
    }
    h3 {
        color: navy;
        text-shadow: 4px 4px 4px lime;

    }
    p {
        color: black;
        text-shadow: 2px 2px 4px lime;
        font-weight: 700;
    }
    button{
        margin-top: 1%;
        margin-bottom: 5%;
        background-image: linear-gradient(to left, darkgreen, white 50%, darkblue);
        color: black;
        text-shadow: 2px 2px 4px lime;
        font-weight: 600;
        border-radius: 10px;
        padding: .5% 1%;
        &:hover{
            transition: all 1s ease-in-out;
            background-image: linear-gradient(to right, darkred, black 50%, darkblue);
            color: white;
        }

    }
`

export default function Details(props) {
    const { details, close } = props;
    const [openDetails, setOpenDetails] = useState(null);
    const [homeWorld, setHomeworld] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};

    useEffect(() => {
        axios.get(`${details.url}`)
            .then(res => {setOpenDetails(res.data)})
            .catch(err => {console.log(err)})
    }, [details])

    useEffect(() => {
        axios.get(`${details.homeworld}`)
            .then(res => setHomeworld(res.data))
            .catch(err => console.log(err))
    }, [details])

    return (
        <StyledDiv>
            <h2>Character Information:</h2>
            {
                openDetails &&
                <>
                    <h3>{openDetails.name}</h3>
                    <p>
                        Born: {openDetails.birth_year}<br></br>
                        Home World: {homeWorld.name}
                    </p>           
                    <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Misc Details</Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                                Gender: {openDetails.gender}<br></br>
                                Height: {openDetails.height}<br></br>
                                Hair Color: {openDetails.hair_color}<br></br>
                                Skin Color: {openDetails.skin_color}<br></br>
                                Eye Color: {openDetails.eye_color}<br></br>
                            </CardBody>
                        </Card>
                    </Collapse>
                </>
            }
            <div>
                <button onClick={close}>Close</button>
            </div>
        </StyledDiv>
    )
}