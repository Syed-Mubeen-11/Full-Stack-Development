// import Lab from "./Lab.tsx";

// function App(){
//   return(
//     <>
//     <div>
//       <Lab />
//     </div>
//     </>
//   )

// }
// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
