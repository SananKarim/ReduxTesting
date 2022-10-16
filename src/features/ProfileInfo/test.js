/** @format */

import React from "react";

export const Check = () => {
  return (
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
        <button>Submit Data</button>
      </form>
    </div>
  );
};
