import React from "react";
import Header from "./common/header/Header";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pages from "./Pages/Pages";
export default function App(){

 
  return (
   <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Pages />}/>
      </Routes>
   </Router>
  )
}