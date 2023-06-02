import React from 'react'
import OutputRow from "./OutputRow";
const Output = (props) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <OutputRow value={props.answer} textSize={{ fontsize: "20px" }} />
      <OutputRow value={props.user} />
    </div>
  );
};

export default Output