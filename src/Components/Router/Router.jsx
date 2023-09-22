import React from "react";
import { Route, Routes } from "react-router-dom";
import BiographicSketch from "../BiographicSketch/BiographicSketch";
import Articles from "../Articles/Articles";
import Papers from "../Papers/Papers";
import Main from "../Main/Main";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/biographicSketch" element={<BiographicSketch />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/office" element={<Office />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/articles" element={<Articles />} /> */}
        <Route path="/biographicsketch" element={<BiographicSketch />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/papers" element={<Papers />} />
      </Routes>
    </div>
  );
};

export default Router;
