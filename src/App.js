import React from 'react'
import UserForm from "./components/Form";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
    
    <Router>
        <Routes>
          <Route path="/userform" element={<UserForm/>}/>

        
        </Routes>
        </Router> 

    </>
  )
}

export default App