import React from "react";

export default function Input(props) {
  const { changeHandler } = props;
  return (
    <>
      <input type="text" onChange={changeHandler} />
    </>
  );
}
