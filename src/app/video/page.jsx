import { Suspense } from "react";
import HydrateVideo from "./HydrateVideo";
import DMVideo from "./DMVideo";

function getVideo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('get video success');
    }, 5000);
  });
}

async function VideoPageResult() {
  const videoMessage = await getVideo();

  return (
    <div>
      result: {videoMessage}
    </div>
  )
}

export default async function VideoPage() {
  
  return (
    <HydrateVideo>
      <div>
        <h1>
          hi this is video page
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <VideoPageResult />
        </Suspense>
        <DMVideo />
      </div>
    </HydrateVideo>
  )
}