import {NextRequest, NextResponse} from "next/server";
import transporter from "@/lib/services/sendMail";


export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const message = {
        from: data.email,
        to: `${process.env.GMAIL_USER}`,
        subject: 'Mesaj de la portofoliu',
        html: `
                <p>${data.email}</p>
                <p>${data.name}</p>
                <p>${data.text}</p>
                `,
        headers: {
            "X-Entry-Ref-ID": "newmail"
        },
    }
    try {
        // await transporter.sendMail(message)
        return NextResponse.json({message: "Message sent successfully", data}, {status: 201})
    } catch (err: unknown) {
        let errorMessage = "Failed to send email";
        if (err instanceof Error) {
            errorMessage = err.message;
            return NextResponse.json(
                {error: errorMessage},
                {status: 500}
            );
        }
    }
}