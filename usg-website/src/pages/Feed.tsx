import React from "react";
import Title from "./components/Title";
import TwitterFeed from "./components/TwitterFeed";

function Feed() {
  return (
    <main>
      <Title>Unser Feed</Title>
      <p className="p-12 text-2xl text-justify">
        In unserem Feed wirst du immer auf dem laufenden gehalten, was gerade so
        ansteht.
      </p>
      <TwitterFeed />
    </main>
  );
}

export default Feed;
