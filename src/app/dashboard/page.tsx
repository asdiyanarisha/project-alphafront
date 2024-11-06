"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <div className="p-4 min-h-screen w-full">
            <div className="mx-auto w-8/12 px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl mt-20">
                <h1 className="text-2xl font-bold pl-1 mb-8 text-left">Golang Struct to JSON Format</h1>
                <form className="space-y-4 md:space-y-6" method="POST">
                    <div>
                        <label htmlFor="name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Struct data</label>
                        <textarea name="formatValue" rows={8}
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Fill data in here"/>
                    </div>
                    {/*<div>*/}
                    {/*    <label htmlFor="username"*/}
                    {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>*/}
                    {/*    <input type="text" name="username" id="username"*/}
                    {/*           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                    {/*           placeholder="emelia_erickson24" required=""/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <label htmlFor="password"*/}
                    {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>*/}
                    {/*    <input type="password" name="password" id="password" placeholder="••••••••"*/}
                    {/*           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                    {/*           required=""/>*/}
                    {/*</div>*/}
                    <button type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Convert
                    </button>
                </form>
            </div>
        </div>
    );
}
