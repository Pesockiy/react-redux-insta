import React from "react";
import Button from "../Components/Button/Button";
import Layout from "../Containers/Layout";
import Input from "../Components/Input/Input";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import { updateEndigDayString } from "../utilits";
import { useCallback } from "react";
import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";

import { SiPokemon } from "react-icons/si";

const Main = () => {
  const count = useSelector((state) => state.cards.GET_CARDS);
  const [input, setInput] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const a = useSelector((store) => store.main.ADD_OBJECT);
  const todos = useSelector((store) => store.cards.GET_CARDS);
  const counter = useSelector((store) => store.main.COUNT);

  React.useEffect(() => {
    // let size = refs.current.length;
    // console.log(size)
    // refs.current[size - 1].focus();
  }, []);

  const mouseOverHandler = useCallback((e) => {
    e.target.style.aspectRatio = "1";
  }, []);
  console.log(todos);
  React.useEffect(() => {
    // if (localStorage.getItem("cards")) {
    //   dispatch({
    //     type: "ADD_CARDS",
    //     payload: JSON.stringify(localStorage.getItem("cards")),
    //   });
    // } else {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${counter}/todos`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "ADD_CARDS", payload: json });
        // localStorage.setItem("cards", json);
      })
      .finally(() => setLoading(false));
    // }
  }, [counter]);

  React.useEffect(() => {
    if (localStorage.getItem("clickCount")) {
      dispatch({ type: "COUNT", payload: localStorage.getItem("clickCount") });
    }
  }, []);

  const buttonClickHandler = () => {
    dispatch({ type: "COUNT", payload: counter + 1 });
    localStorage.setItem("clickCount", counter + 1);
  };

  const changeHandler = (e) => {
    setInput((prev) => {
      return prev * e.target.value;
    });
  };
  // let refs = React.useRef([]);
  const ref = React.useRef([]);

  return (
    <Layout>
      <SiPokemon className="poke" size={"200px"} />
      <button onClick={() => dispatch({ type: "add" })}>fiofoieifo {a}</button>
      <Loader isLoading={loading} />
      <div className="container">
        <Input changeHandler={changeHandler} />
        {input}
        <Input changeHandler={changeHandler} />
        <Button
          // accent
          clickHandler={buttonClickHandler}
          children={`кликнули ${counter} ${updateEndigDayString(counter)}`}
        />
      </div>
      <div className="todos-block">
        {todos.map((item, index) => {
          return (
            <Link to="/google.com" key={item.id}>
              <Card
                id={item.id}
                ref={ref.current}
                className={classNames({ "line-through": true })}
                ttl={item.title}
                body={item.title}
                mouseOver={mouseOverHandler}
              />
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Main;
