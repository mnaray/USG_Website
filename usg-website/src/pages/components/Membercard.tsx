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
          <p className=" align-text-bottom ">{source.name}</p>
        </div>
        <div className="flip-card-back">
          <h1 className="text-4xl">"{source.name}"</h1>
          <p className="text-xl">{source.function}</p>
          <p>About: </p>
          <p className="text-lg">{source.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Membercard;
