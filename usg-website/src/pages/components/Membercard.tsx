import React from "react";

interface membercard {
  img: string;
  name: string;
  funktionIG?: string;
  teamrolle: string;
  comment?: string;
}

function Membercard(source: membercard) {
  return (
    <div className="flip-card m-10 rounded">
      <div className="flip-card-inner rounded">
        <div className="flip-card-front rounded">
          <img
            className="h-full w-full aspect-7/9"
            src={source.img}
            alt={"Picture of " + source.name}
          />
          <p className="align-text-bottom text-2xl font-bold">{source.name}</p>
        </div>
        <div className="flip-card-back rounded py-5 px-3 bg-slate-700">
          <h1 className="text-4xl">{source.name}</h1>
          <p className="text-xl">{source.funktionIG}</p>
          <p className="pt-2">Teamrolle:</p>
          <p className="pb-1 text-lg font-medium">{source.teamrolle}</p>
          <p className="text-lg py-2">{source.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Membercard;
