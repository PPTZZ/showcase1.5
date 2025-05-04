"use server";

// Fetching projects from the DB
async function fetchProjects() {
  const res = await fetch(`${process.env.SERVER_URI}/api/projects`, {
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

export { fetchProjects };
