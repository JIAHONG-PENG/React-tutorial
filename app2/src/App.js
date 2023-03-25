import React from "react"
import Info from "./components/Info"
import Interests from "./components/Interests"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="box">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
