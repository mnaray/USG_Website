import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
    text: string;
    destination: string;
}

function Button(props: ButtonProps) {
  return (
    <Link to={props.destination}>
      <button className="bg-blue-300 px-3 py-1 rounded">{props.text}</button>
    </Link>
  )
}

export default Button
