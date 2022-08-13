import React, { useEffect, useState, useRef } from "react";

import Layout from "../Containers/Layout";

import useInput from "../Hooks/useInput";

export default function Signup() {
  const refName = useRef();
  const refLastName = useRef();

  useEffect(() => {
    // ref.current.focus();
  }, []);

  const keyPressHandler = (e) => {
    console.log(e.key === "Enter" && e.target.value.length > 0);
    if (e.key === "Enter" && e.target.value.length > 0) {
      refLastName.current.focus();
      console.log(ref.current);
    }
  };

  const name = useInput("vasya");
  const lastName = useInput("volodin");

  return (
    <>
      <Layout>
        <div className="container">
          <form action="">
            <input
              ref={refName}
              type="text"
              placeholder="enter name"
              onKeyPress={keyPressHandler}
              defaultValue={name.value}
            />
            <br />
            <input
              ref={refLastName}
              type="text"
              placeholder="enter last name"
              onInput={(e) => lastName.onInput(e)}
              defaultValue={lastName.value}
            />
          </form>
        </div>
      </Layout>
    </>
  );
}
