import React from "react";

export default function AntiScamCheck(props) {
  return (
    <div>
      <h2>Anti Scam Check</h2>
      {/* Replace with relevant content and choices */}
      <div>
        <button onClick={props.onPrev}>Previous</button>
        <button onClick={props.onNext}>Next</button>
      </div>
    </div>
  );
}
