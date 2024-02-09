import React, { useState } from "react";

const AccoridanBar = ({ item }) => {
  
  console.log("selected", selected);
  return (
    <div
      className="bg-secondary p-2 mb-2 w-50 text-light"
      onClick={() => handleSignleSelect(item?.id.toString())}
    >
      <p>{item?.question}</p>
      {item?.id == selected ? (
        <li className={item?.id == selected ? "block" : "d-none"}>
          {item?.answer}
        </li>
      ) : null}
    </div>
  );
};

export default AccoridanBar;
