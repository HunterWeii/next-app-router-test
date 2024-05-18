'use client';
import { getDM } from "./HydrateVideo";
import { useQuery } from "@tanstack/react-query";

export default function DMVideo() {
  const query = useQuery({
    queryKey: ['dm_video'],
    queryFn: getDM,
  });

  return (
    <div>
      <div>
        DMID: {query.data.media.id}
      </div>
      <div>
        Title: {query.data.media.title}
      </div>
    </div>
  )
}