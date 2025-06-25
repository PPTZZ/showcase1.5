import dbConnect from "@/lib/db";
import Project from "@/lib/schemas/proiecte";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const projects = await Project.find({});

    return NextResponse.json(projects, { status: 200 });
  } catch (err: unknown) {
    // Proper error typing and handling
    let errorMessage = "Failed to fetch projects";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 } // 500 is more appropriate for server errors
    );
  }
}
