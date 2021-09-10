import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

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
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(ch => {
          return <Character data={ch} key={ch.id} open={openDetails}/>
        })
      }
      {
        <Details details={openCharDetails} close={closeDetails} />
      }
    </div>
  );
}

export default App;
