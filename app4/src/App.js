import './App.css';
import Nav_bar from "./Nav_bar"
import Card from "./Card"
import data from "./data"

function App() {
  const cards = data.map(item => (
    <Card 
      item={item}
    />
  ))
  return (
    <div className="App">
      <Nav_bar />
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
