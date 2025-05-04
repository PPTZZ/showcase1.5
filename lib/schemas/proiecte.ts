import mongoose, { Schema } from "mongoose";
import type { TProject } from "@/lib/definitons";

const projectsSchema: Schema<TProject> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Project =
  mongoose.models.Project ||
  mongoose.model<TProject>("Project", projectsSchema);
export default Project;
