import React, { Children } from "react"

interface TitleType {
  children: string
}

function Title(source: TitleType) {
  return <h1 className="text-3xl pb-8">{source.children}</h1>
}

export default Title
