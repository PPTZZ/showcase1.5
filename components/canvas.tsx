"use client";
import type { TProject } from "@/lib/definitons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Dialog from "./ui/dialog";
import { useRouter } from "next/navigation";

function Canvas({ projects }: { projects: TProject[] }) {
  const router = useRouter();

  function handleClick(id: string | undefined) {
    router.push(`/?d=y&id=${id}`);
  }

  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-around xl:justify-between gap-7">
        {projects.map((project: TProject) => {
          return (
            <Card
              key={project._id}
              className="w-96"
              onClick={() => handleClick(project._id)}
            >
              <Image
                src={project.imgUrl}
                alt={project.name}
                width={500}
                height={150}
              />
              <CardContent>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.descr}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <p>Technologies: {project.tech}</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Dialog projects={projects} onClose={()=>router.replace('/')}></Dialog>
    </>
  );
}

export default Canvas;
