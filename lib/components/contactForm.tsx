'use client'
import React, { useActionState, useEffect } from 'react'
import { sendMessage } from "@/lib/services/actions";
import PButton from "@/lib/ui/pButton";
import { TFormState } from "@/lib/definitons";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
    const initialState: TFormState = {
        errors: {},
        message: ''
    }
    const [state, formAction, isPending] = useActionState(sendMessage, initialState)
    useEffect(() => {
        if (state?.message) {
            toast.success(state.message);
            state.message = ''
        }
        if (state?.errors.cookie) {
            toast.error(state.errors.cookie);
            state.errors.cookie = ''
        }
    }, [state?.message, state?.errors.cookie]);
    return (
        <div
            className={'bg-background-secondary w-full h-fit lg:h-[31.2rem] rounded-xl p-10 '}>
            <form action={formAction} className={'flex flex-col gap-2 h-full'}>
                <div className={'h-16 w-full'}>
                    <input type="text" name={'name'}
                        className={`w-full border-2 rounded h-10 pl-2  ${state?.errors.name ? 'border-custom-error' : 'border-outline-main'}`}
                        placeholder={'full name *'} />
                    {state?.errors.name && <p className={'text-custom-error font-semibold tracking-wide'}>{state.errors.name}</p>}
                </div>
                <div className={'h-16 w-full'}>
                    <input type="text" name={'email'}
                        className={`w-full border-2 rounded h-10 pl-2  ${state?.errors.email ? 'border-custom-error' : 'border-outline-main'}`}
                        placeholder={'email *'} />
                    {state?.errors.email && <p className={'text-custom-error font-semibold tracking-wide'}>{state.errors.email}</p>}
                </div>
                <div className={'h-56 w-full'}>
                    <textarea name={"text"} maxLength={250}
                        className={`w-full h-50 border-2 rounded pl-2 ${state?.errors.text ? 'border-custom-error' : 'border-outline-main'}`}
                        placeholder={'your message here... *'} />
                    {state?.errors.text && <p className={'text-custom-error font-semibold tracking-wide'}>{state.errors.text}</p>}
                </div>
                <PButton variant={"primary"} size={'full'} type={"submit"} disabled={isPending}>send</PButton>
            </form>
            <Toaster position={'bottom-center'} toastOptions={{ className: 'font-bold' }} />
        </div>
    )
}
export default ContactForm
