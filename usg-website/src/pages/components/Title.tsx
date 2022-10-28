import React from "react"

interface TitleType {
  title: string
}

function Title(text: TitleType) {
  return <h1 className="text-3xl pb-8">{text.title}</h1>
}

export default Title
