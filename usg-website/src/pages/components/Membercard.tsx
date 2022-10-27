import React from "react";
import "../../css/index.css";

interface membercard {
  mbr: string;
  name: string;
  function: string;
  comment?: string;
}

function Membercard(source: membercard) {
  return (
    <div className="flip-card m-10 rounded">
      <div className="flip-card-inner rounded">
        <div className="flip-card-front rounded">
          <img
            className="h-full w-full aspect-7/9"
            src={source.mbr}
            alt={"Picture of " + source.name}
          />
          <p className=" align-text-bottom text-2xl">{source.name}</p>
        </div>
        <div className="flip-card-back py-5">
          <h1 className="text-4xl">"{source.name}"</h1>
          <p className="text-xl">{source.function}</p>
          <p className="pt-3 pb-1 font-medium">About: </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <p className="text-lg">{source.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Membercard;
