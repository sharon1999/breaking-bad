import React, { useState } from "react";

const Search = ({getQuery}) => {
  const [text, setText] = useState("");
  const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }
  return (
    <section className="search">
      <input
        type="text"
        value={text}
        className="form-control"
        placeholder="Search characters"
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      ></input>
    </section>
  );
};

export default Search;
