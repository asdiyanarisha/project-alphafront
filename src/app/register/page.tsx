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
    const [formData, setFormData] = useState<formData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isButtonDisable: true,
    });

    const [isConfirmPasswordDisabled, setIsConfirmPasswordDisabled] = useState(true);

    const [error, setError] = useState<errorFormData>({});

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setError({...error, [name]: ""});

        if (name == 'email') {
            await handleEmailChange(value);
        }

        if (name == 'name') {
            await handleName(value);
        }

        if (name == 'password') {
            await handlePassword(value);
        }

        if (name == 'confirmPassword') {
            await handleConfirmPassword(value);
        }

        setFormData({...formData, [name]: value});
    }

    const checkBoxTermsCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setFormData({...formData, ['isButtonDisable']: !isChecked});
    }

    const handleEmailChange = async (value: string) => {
        if (value == '') {
            setError({...error, ['email']: "email not empty"});
            return
        }

        let regexEmail = new RegExp("^[A-z.]{1,100}\\@[A-z]{1,10}\\.[A-z]{1,5}", "gm");
        if (!regexEmail.test(value)) {
            setError({...error, ['email']: "Invalid email address"});
        }
    }

    const handleConfirmPassword =  async (value: string) => {
        if (value == '') {
            setError({...error, ['confirmPassword']: "confirm password not empty"});
            return
        }

        if (formData.password != value) {
            setError({...error, ['confirmPassword']: "password does not match"});

        }
    }

    const handlePassword =  async (value: string) => {
        if (value == '') {
            setError({...error, ['password']: "password not empty"});
            setIsConfirmPasswordDisabled(true);
            return
        }

        setIsConfirmPasswordDisabled(false);

        console.log(formData);
        return
    }

    const handleName = async (value: string) => {
        if (value == '') {
            setError({...error, ['name']: "name not empty"});
            return
        }

        let regexName = new RegExp("^[A-z0-9\\s]{1,30}$", "gm");
        if (!regexName.test(value)) {
            setError({...error, ['name']: "Name must be alhpanumeric"});
        }
    }

    const validate = async () => {
        const errors : errorFormData = {};
        if (formData.name == "") {
            alert("form name not empty")
            errors.name = "Name is required";
        }

        if (formData.email == "") {
            errors.email = "Email is required";
        }

        if (formData.password == "") {
            errors.password = "Password is required";
        }

        if (formData.confirmPassword == "") {
            errors.confirmPassword = "Confirm password is required";
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
                        <label className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                               htmlFor="grid-first-name">
                            Email
                        </label>
                        <input
                            className={`appearance-none block w-full text-gray-700 text-sm border rounded py-3 px-4 mb-1 leading-tight focus:outline-none
                            focus:bg-white
                            ${error.email && "border-red-500"}`}
                            id="grid-first-name"
                            onChange={handleChange}
                            name={"email"}
                            placeholder={"Email fill here"}/>
                        {error.email && <p className="text-red-500 text-xs py-1">{error.email}</p>}
                    </div>

                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                               htmlFor="grid-first-name">
                            Name
                        </label>
                        <input
                            className={`appearance-none block w-full text-gray-700 text-sm border rounded py-3 px-4 mb-1 leading-tight focus:outline-none
                            focus:bg-white
                            ${error.name && "border-red-500"}`}
                            id="grid-first-name"
                            onChange={handleChange}
                            name={"name"}
                            placeholder={"Name fill here"}/>
                        {error.name && <p className="text-red-500 text-xs italic py-1 ">{error.name}</p>}
                    </div>

                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                               htmlFor="grid-first-name">
                            Password
                        </label>
                        <input
                            className={`appearance-none block w-full text-gray-700 text-sm border rounded py-3 px-4 mb-1 leading-tight focus:outline-none
                            focus:bg-white
                            ${error.password && "border-red-500"}`}
                            id="grid-first-name"
                            onChange={handleChange}
                            name={"password"}
                            type={"password"}
                            placeholder={"Enter Password"}/>

                        {error.password && <p className="text-red-500 text-xs italic py-1 ">{error.password}</p>}
                    </div>

                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-sm font-medium mb-2"
                               htmlFor="grid-first-name">
                            Confirm Password
                        </label>
                        <input
                            className={`appearance-none block w-full text-gray-700 text-sm border rounded py-3 px-4 mb-1 leading-tight focus:outline-none
                            focus:bg-white
                            disabled:bg-gray-100
                            ${error.confirmPassword && "border-red-500"}`}
                            id="grid-first-name"
                            onChange={handleChange}
                            name={"confirmPassword"}
                            type={"password"}
                            disabled={isConfirmPasswordDisabled}
                            placeholder={"Enter Confirm Password"}/>

                        {error.confirmPassword && <p className="text-red-500 text-xs italic py-1 ">{error.confirmPassword}</p>}
                    </div>

                    <div className="w-full md:w-full px-3 mb-6 mt-3 md:mb-0">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    onChange={checkBoxTermsCondition}
                                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                       />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept
                                    the <a
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                    </div>


                    <button
                        id="button"
                        type="button"
                        className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-800 hover:bg-blue-600
                        hover:shadow-lg
                        focus:outline-none
                        disabled:bg-gray-400"
                        onClick={onHandleSubmit}
                        disabled={formData.isButtonDisable}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}