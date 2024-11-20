import React from "react";

const History = ({ history }) => (
  <div className="history">
    <h2>Last Searched Books</h2>
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default History;
