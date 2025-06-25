import { queryOptions } from "@tanstack/react-query";

// Fetching projects from the DB
async function fetchProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.statusText}`);
  }

  return res.json();
}



export const projectsOptions = queryOptions({
  queryKey: ["projects"],
  queryFn: fetchProjects,
});
