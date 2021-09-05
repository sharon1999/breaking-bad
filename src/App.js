import React, { useState, useEffect } from "react";
import '../src/App.css'
import CharacterGrid from "./Components/Characters/CharacterGrid";
import Header from "./Components/Header";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters`
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  return (
    <div className="App">
      <Header />
      <CharacterGrid data= {data} />
    </div>
  );
}

export default App;
