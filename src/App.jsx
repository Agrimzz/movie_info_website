import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Details from "./pages/Details/Details"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
