import dbConnect from "@/lib/db";
import Project from "@/lib/schemas/proiecte";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const projects = await Project.find({});
    
    return NextResponse.json(projects, { status: 200 });
    
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 404 });
  }
}
