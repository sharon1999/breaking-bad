import React from "react";

function CharacterItem({ data }) {
  return (
    <div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={data.img} alt="" />
          </div>
          <div className="card-back">
            <h1>{data.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {data.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {data.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {data.birthday}
              </li>
              <li>
                <strong>Status:</strong> {data.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;
