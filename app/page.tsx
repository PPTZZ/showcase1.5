import { ThemeToggle } from "@/components/themeToggle";
import { fetchProjects } from "@/lib/actions";
import type { TProject } from "@/lib/definitons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const projects = await fetchProjects();
  return (
    <>
      <ThemeToggle />
      <div>
        {projects.map((project: TProject) => {
          return (
            <Card key={project._id}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.imgUrl}
                  alt={project.name}
                  width={500}
                  height={300}
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
