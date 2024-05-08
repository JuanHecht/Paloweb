import { Routes, Route } from "react-router-dom";
import './App.css'

import LandingPage from "./Pages/LandingPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App