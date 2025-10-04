import React from "react";

export default function Card() { // this props is object
  return (
    <div
      className="flex flex-col rounded-xl  p-4"
      style={{
        border: "0.88px solid",

        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <div>
        <img
          src="https://i.gifer.com/fxVE.gif"
          alt="nft-gif"
          width="350"
          height="350"
          className="rounded-xl"
        />
      </div>
      
    </div>
  );
}
