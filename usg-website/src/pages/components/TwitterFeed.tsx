import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"

function TwitterFeed() {
  return (
    <>
      <div className="w-3/5">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="usg_esports"
          options={{ height: 2000 }}
        />
      </div>
    </>
  )
}

export default TwitterFeed
