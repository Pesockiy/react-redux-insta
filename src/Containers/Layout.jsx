import React from "react";
import Header from "./Header";

export default function (props) {

  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
