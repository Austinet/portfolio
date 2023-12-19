import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import  AOS  from "aos"
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
      AOS.init({
    duration: 1800,
    offset: 0
  })
  })

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default App