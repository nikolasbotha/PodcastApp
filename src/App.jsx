import { useState, useEffect } from 'react'
import './App.css'
import getAllShows from './modules/GetAllShows.js'
//import getSingleShow from './modules/GetSingleShow.js'
import bookLogo from './assets/book.svg'
import { Preview } from './modules/showElements'

function App() {
  
  const [allShows, setAllShows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const podcasts = await getAllShows();
        setAllShows(podcasts);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if necessary
      }
    };

    fetchData();
  }, []);





  return (
    <>
    <nav className="navBar">
      <img src={bookLogo} className="logo" alt="Pod-_-bot" />
      <h2 className="heading">Heading</h2>
      <sl-button-group label="Alignment" className="dark-light-button">
        <sl-button size="small">dark</sl-button>
        <sl-button size="small">light</sl-button>
      </sl-button-group>
    </nav>
    <div className="searchbar"></div>
    <div className="main-grid-container">
      {allShows.map((item) => (
      <Preview key={item.id} data={item}  />
    ))}
    </div>

    </>
  )
}

export default App
