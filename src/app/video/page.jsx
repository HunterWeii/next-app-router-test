import { Suspense } from "react";

function getVideo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('get video success');
    }, 5000);
  });
}

async function getDM() {
  const res = await fetch('https://de-api.eco.astro.com.my/dm/api/v1/x8ym736?site=gempak');
  const response = await res.json();

  return response.response;
}

async function DMVideo() {
  const data = await getDM();

  return (
    <div>
      DMID: {data.media.id}
    </div>
  )
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
    <div>
      <h1>
        hi this is video page
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoPageResult />
      </Suspense>
      <DMVideo />
    </div>
  )
}