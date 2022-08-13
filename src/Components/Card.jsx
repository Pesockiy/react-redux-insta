import React from "react";

export default function Card(props) {
  const { ttl, body,mouseOver,ref,id } = props;
  console.log(ref)
  let n = 3;
  return (
    <>
      <div ref={id === n ? ref : null} className="card" onMouseOver={mouseOver}>
        <h4 className="card__title">{ttl}</h4>
        <div className="card__body">{body}</div>
      </div>
    </>
  );
}
