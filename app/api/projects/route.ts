import dbConnect from "@/lib/db";
import Project from "@/lib/schemas/proiecte";
import {NextResponse} from "next/server";

export const GET= async ()=> {
    await dbConnect();
    try {
        const projects = await Project.find({});

        return NextResponse.json(projects, {status: 200});
    } catch (err: unknown) {
        let errorMessage = "Failed to fetch projects";
        if (err instanceof Error) {
            errorMessage = err.message;
            return NextResponse.json(
                {error: errorMessage},
                {status: 500}
            );
        }
    }
}
