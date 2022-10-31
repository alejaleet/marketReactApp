import {
    Route,
    Routes,
  } from "react-router-dom";

  import React from 'react'
import ListCard from "./ListCard/ListCard";
import Basket from "./Basket/Basket";
  
  const Router = () => {
    return (
      <main>
        <Routes>
            <Route path="/basket" element={<Basket/>} ></Route>
            <Route path="*" element={<ListCard/>} ></Route>
        </Routes>
      </main>
    )
  }
  
  export default Router