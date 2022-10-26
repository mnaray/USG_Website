import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"

function TwitterFeed() {
  return (
    <>
      <div className="w-1/2">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="usg_esports"
          options={{ height: 600 }}
        />
      </div>
    </>
  )
}

export default TwitterFeed
