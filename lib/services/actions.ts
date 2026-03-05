"use server"
import {getIronSession, SessionOptions} from "iron-session";
import {cookies} from "next/headers";
import {Errors, TFormState, TSessionData} from "../definitons";


// COOKIE OPTIONS
const sessionOptions: SessionOptions = {
    password: process.env.IRON_SESSION_PASS!,
    cookieName: 'tcCookies',
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
    }
}

// GENERATING COOKIE
const getSession = async () => {
    return await getIronSession<TSessionData>(await cookies(), sessionOptions);
}

// SET COOKIE TC
const setSession = async () => {
    const session = await getSession();
    session.sessionTC = true;
    await session.save()
}

// GET COOKIE TC
const getSessionData = async () => {
    const session = await getSession();
    return session.sessionTC ? session.sessionTC : false;
}

//SENDING THE MESSAGE
export const sendMessage = async (prevState: TFormState, formData: FormData): Promise<TFormState> => {
    const tcCookie = await getSessionData()
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const text = formData.get("text") as string;
    const errors: Errors = {}

    // checking all the input fields
    if (!name) errors.name = "Name field is required!"
    if (!email) errors.email = "Email field is required!"
    if (!text) errors.text = "A message is required!"
    if (Object.keys(errors).length > 0) return {errors}

    // checking the cookie to se if a message was sent from this browser in the last hour
    if (tcCookie) {
        return {
            errors: {cookie: "To avoid spam the message was not sent try again later."}
        };
    }

    //composing the message body
    const messageData = {
        name,
        email,
        text
    }
    const options = {
        method: "POST",
        body: JSON.stringify(messageData),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };
    // sending the message and if successful setting a cookie to block next messages for an hour
    try {
        // const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`!, options);
        // if (data.status === 201) {
        await setSession()
        // }

        return {
            message: 'Message sent successfully',
            errors: {}
        }
    } catch (err) {
        return {
            errors: {
                fetchError: err
            }
        }
    }
}