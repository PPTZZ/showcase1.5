import Canvas from "@/components/canvas";
import { fetchProjects } from "@/lib/actions";

export default async function Home() {

  const projects = await fetchProjects();
  
  return (
    <div className="md:w-[calc(100vw-16rem)] p-5 overflow-scroll">
      <Canvas projects={projects} />
    </div>
  );
}
