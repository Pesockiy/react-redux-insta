import React from "react";

import './Button.css'

export default function Button(props) {
  const { clickHandler } = props;
  return <button {...props} className={`button ${props.accent ? 'button--accent' : 'button--default'}`}  onClick={clickHandler}>{props.children}</button>;
}
