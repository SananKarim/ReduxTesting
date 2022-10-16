/** @format */

import React from "react";
import faiz from "../../assets/images/faiz.jpg";
import { AiFillLike } from "react-icons/ai";
import { increment } from "./cardSlice";
import { useSelector, useDispatch } from "react-redux";

export const Card = () => {
  const {
    card: { cards },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div>
      {cards.map((a, index) => (
        <div style={{ width: "20vw", margin: "10px" }}>
          <img src={a.image} alt={faiz} width='100%' />
          {a.likes}
          <button
            onClick={() =>
              dispatch(increment({ index: index, likes: a.likes + 1 }))
            }>
            <AiFillLike />
          </button>
        </div>
      ))}
    </div>
  );
};
