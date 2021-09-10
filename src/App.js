import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 10% 0;
  h1 {
    opacity: 70%;
    margin: 0 30% 5%;
    color: black;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 4px lime;
    background-image: linear-gradient(to left, black, white 50%, white);
    border-radius: 10px;
    padding: 1% 0;
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])
  const [openCharDetails, setOpenCharDetails] = useState(null)

  const openDetails = id => {
    setOpenCharDetails(id)
  }

  const closeDetails = () => {
    setOpenCharDetails(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <StyledDiv className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {
        characters.map(ch => {
          return <Character data={ch} key={ch.id} open={openDetails}/>
        })
      }
      {
        openCharDetails && <Details details={openCharDetails} close={closeDetails} />
      }
    </StyledDiv>
  );
}

export default App;
