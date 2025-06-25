import Canvas from "@/components/canvas";
import { projectsOptions } from "@/lib/actions/fetchProjects";
import { getQueryClient } from "@/lib/actions/getQueryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  try{

    void queryClient.prefetchQuery(projectsOptions);
  }catch(err){
    console.error('prefetch failed',err)
  }

  return (
    <div className="md:w-[calc(100vw-16rem)] p-5 overflow-scroll">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Canvas />
      </HydrationBoundary>
    </div>
  );
}
