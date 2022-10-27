import React from "react"
import TwitterFeed from "./components/TwitterFeed"

function Feed() {
  return (
    <main className="app-header justify-start pt-12 text-2xl">
      <h1 className="text-6xl">Unser Feed</h1>
      <p className="p-12 text-2xl">
        In unserem Feed wirst du immer auf dem laufenden gehalten, was gerade so
        ansteht.
      </p>
      <TwitterFeed />
    </main>
  )
}

export default Feed
