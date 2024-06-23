// `app/page.tsx` is the UI for the `/` URL
"use client"
import {useState} from "react";

interface formData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    isButtonDisable: boolean;
}

interface errorFormData {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export default function Page() {

    return (
        <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
            <div className="mx-auto max-w-xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl content-center mt-72">
                <h1 className="text-2xl font-bold pl-3 mb-8 text-center">Registration successful!</h1>
                <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                    <p className={`text-center mb-2`}>Please check your email to verify your account.</p>
                </div>

                <button
                    id="button"
                    type="button"
                    className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-600
                        hover:bg-green-800
                        hover:shadow-lg
                        focus:outline-none"
                >
                    Log In
                </button>
            </div>
        </div>
    );
}