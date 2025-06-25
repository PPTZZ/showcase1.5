"use client";
import { Suspense, useEffect, useState } from "react";
import type { TProject } from "@/lib/definitons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/ui/loadingSpinner";

// Dynamically import Dialog with no SSR
const Dialog = dynamic(() => import("@/components/ui/dialog"), {
  ssr: false,
  loading: () => <div className="hidden" />, // Empty loading state since dialog is hidden initially
});

// Fallback data in case API fails

export default function ProjectsPage() {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load projects. Showing sample data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="w-full p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      <div className="w-full h-full flex flex-wrap justify-around xl:justify-between gap-7 p-4 overflow-x-scroll">
        {projects.map((project: TProject) => (
          <Link
            href={`/?d=y&id=${project._id}`}
            key={project._id}
            scroll={false}
          >
            <Card className="w-96 hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={project.imgUrl}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
                />
              </div>
              <CardContent>
                <CardTitle className="mt-2">{project.name}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                  {project.descr}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Technologies: {project.tech}
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <Dialog projects={projects} />
    </Suspense>
  );
}
