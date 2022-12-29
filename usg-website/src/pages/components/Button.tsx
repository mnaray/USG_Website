import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  destination: string;
  state?: string;
}

function Button(props: ButtonProps) {
  if (props.destination.startsWith("http")) {
    return (
      <button className="bg-blue-600 text-white text-lg px-3 py-1 rounded
      hover:bg-blue-200 hover:text-black transition-all
      duration-200">
        <a target="_blank" rel="noreferrer" href={props.destination} >{props.text}</a>
      </button>
    )
  }

  return (
    <Link to={props.destination} state={{ id: props.state }}>
      <button className="bg-blue-600 text-white text-lg px-3 py-1 rounded
                          hover:bg-blue-200 hover:text-black transition-all
                          duration-200"
        tabIndex={-1}>
        {props.text}
      </button>
    </Link>
  )
}

export default Button
