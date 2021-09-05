import React, { useState, useEffect } from "react";
import '../src/App.css'
import CharacterGrid from "./Components/Characters/CharacterGrid";
import Header from "./Components/Header";
import Search from "./Components/UI/Search";
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    getData();
  }, [query]);
  const getData = async () => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  return (
    <div className="App">
      <Header />
      <Search  getQuery = {(q)=> setQuery(q)} />
      <CharacterGrid data= {data} />
    </div>
  );
}

export default App;
