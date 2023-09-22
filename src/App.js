import React from "react";
import "./App.css";
import CarouselImage from "./Components/ImageSlider/CarouselImage";
import { BrowserRouter } from "react-router-dom";

import TopNavbar from "./Components/Navbar/TopNavbar";
import Router from "./Components/Router/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar />
        {/* <CarouselImage /> */}

        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
