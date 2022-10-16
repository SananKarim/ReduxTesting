/** @format */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Info = () => {
  const {
    info: { information },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [changer, setChanger] = useState(false);
  const [number, setNumber] = useState(null);
  function handleClick(index) {
    setChanger(true);
    setNumber(index);
  }

  return (
    <div>
      {information.map((info, index) => (
        <div>
          <h1>{info.name}</h1>
          <h2>{info.position}</h2>
          <h3>{info.city}</h3>
          <h3>{index}</h3>
          <button onClick={() => handleClick(index)}>Change Data</button>
        </div>
      ))}

      {changer === true ? (
        <div>
          <form>
            <label>
              Name:
              <input type='text' name='name' />
            </label>
            <br />
            <label>
              Position:
              <input type='text' name='name' />
            </label>
            <br />
            <label>
              City:
              <input type='text' name='name' />
            </label>
            <br />
            {console.log(number)}
            <button>Submit Data</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Info;
