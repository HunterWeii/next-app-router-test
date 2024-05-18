import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import getQueryClient from '../getQueryClient';

export async function getDM() {
  const res = await fetch('https://de-api.eco.astro.com.my/dm/api/v1/x8ym736?site=gempak');
  const response = await res.json();

  return response.response;
}

export default async function HydrateVideo(props) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['dm_video'],
    queryFn: getDM,
  });
  
  const hydrateState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={hydrateState}>
      {props.children}
    </HydrationBoundary>
  )
}