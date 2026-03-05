import {Document} from "mongoose";

export type TProject = Document & {
    _id?: string;
    name: string;
    descr: string;
    imgUrl: string;
    tech: string[];
    link: string;
};

export type TDialogProps = {
    _id?: string;
    name: string;
    descr: string;
    imgUrl: string;
    tech: string[];
    link: string;
}

export type TSvgProps = {
    href: string;
    id: string;
    className?: string | string[];
};

export type Errors = {
    name?: string;
    email?: string;
    text?: string;
    cookie?: string;
    fetchError?: unknown;
}


export type TFormState = {
    errors: Errors;
    message?: string;
}

export type TSessionData = {
    sessionTC: boolean
}