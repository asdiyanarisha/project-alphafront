// `app/page.tsx` is the UI for the `/` URL
"use client"
import {useState} from "react";

interface formData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface errorFormData {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export default function Page() {
    const [formData, setFormData] = useState<formData>({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState<errorFormData>({});

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        console.log(name, value, formData);
        setFormData({...formData, [name]: value});
        setError({...error, [name]: ""});
    }

    const validate = async () => {
        const errors : errorFormData = {};
        if (formData.name == "") {
            alert("form name not empty")
            errors.name = "Name is required";
        }

        setError(errors)
    }

    const onHandleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        alert("click");
        await validate()
    }

    return (
        <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
            <div className="mx-auto max-w-xl px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                <h1 className="text-2xl font-bold pl-3 mb-8 text-left">Register</h1>
                <form id="form" noValidate>
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Your Email
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            onChange={handleChange}
                            name={"email"}
                            placeholder={"Email fill here"}/>
                        {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                    </div>

                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Your Name
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            onChange={handleChange}
                            name={"name"}
                            placeholder={"Name fill here"}/>
                        {error.name && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                        {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                    </div>

                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Password
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            onChange={handleChange}
                            name={"password"}
                            type={"password"}
                            placeholder={"Enter Email"}/>
                        {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                    </div>

                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            Confirm Password
                        </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            onChange={handleChange}
                            name={"confirmPassword"}
                            type={"password"}
                            placeholder={"Enter Retype Password"}/>
                        {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                    </div>

                    <button
                        id="button"
                        type="button"
                        className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-800 hover:bg-blue-600 hover:shadow-lg focus:outline-none"
                        onClick={onHandleSubmit}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}