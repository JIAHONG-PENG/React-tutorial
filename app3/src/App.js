import './App.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
// import kz from "./images/katie-zaferes.png"

function App() {
  const cards = data.map(item => (
    <Card 
      key={item.id}
      item={item}
    />
  ))

  return (
    <div className="App">
      <Navbar />
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
