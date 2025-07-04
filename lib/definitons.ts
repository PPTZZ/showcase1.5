import { Document } from "mongoose";

export type TProject = Document & {
  _id?: string;
  name: string;
  descr: string;
  imgUrl: string;
  tech: string;
  link: string;
};

export type TDialog = {
  projects: TProject[];
};

export type TSvgProps = {
  href: string;
  id: string;
  className?: string | string[];
};
