import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { cardpictures } from './cardpictures'
import { SearchRocket } from './pages/SearchRocket.jsx'


const App = () => {
  const [data, setData] = useState([]);

  console.log(cardpictures)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/rockets"
        );
        if (!response.ok) {
          console.log("something went wrong with response");
        }
        const responseData = await response.json();


        for(let i = 0; i<responseData.length; i++){
          cardpictures[i].cardName = responseData[i].rocket_name
          cardpictures[i].cardDesc = responseData[i].description
          cardpictures[i].cardImage = responseData[i].flickr_images[1]
        }

        console.log("response", responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Router>
        <Header className="bg-emerald-900"/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:query" element={<SearchRocket />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App