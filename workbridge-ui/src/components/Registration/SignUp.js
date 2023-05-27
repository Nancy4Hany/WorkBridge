import React from "react";
import { useEffect, useState } from 'react';
import axios from '../../API/AxiosConfig'; 

// import axios from 'axios';

export default function SignUp() {
    let [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
        role: "RECRUITER",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleRegistration = (event, role) => {
        if (event) {
            event.preventDefault();
          }
        setFormData((prevFormData) => ({
          ...prevFormData,
          role: role,
        }));
    
        handleSubmit();
      };
    
      const handleSubmit = () => {
        // event.preventDefault();
        console.log(formData);
        axios.post("/auth/register", formData)
          .then(response => {
        
            console.log(response.data);
          })
          .catch(error => {
       
            console.error(error);
          });
      };
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Signup
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className=" text-gray-900 flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleInputChange}
                                    className="text-gray-900 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="text-gray-900 flex flex-col items-start">
                                <input
                                    type="email"
                                    name="username"
                                    onChange={handleInputChange}
                                    className="text-gray-900 text-gray-900 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="text-gray-900 flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    className="text-gray-900 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="text-gray-900 flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    onChange={handleInputChange}
                                    className="text-gray-900 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="flex items-center mt-4">
                        <button
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        onClick={(event) => handleRegistration(event, "RECRUITER")}>
                            
                        Register as a Recruiter/Company
                       </button>
                        </div>
                        <div className="flex items-center mt-4">
                        <button
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        onClick={(event) => handleRegistration(event,"USER")}>
                        Register as a Job Seeker
                        </button>
                        </div>
                    </form>
                    <div className="mt-4 text-gray-600">
                        Already have an account?{"     "}
                        <span>
                            <a className="text-purple-600 hover:underline" href='/'>
                                Log in
                            </a>
                        </span>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 text-gray-800 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-2">
                    <button
    aria-label="Login with Google"
    type="button"
    className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
        className="w-5 h-5 fill-current text-red-500"
    >
        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
    <p className="text-gray-800">Login with Google</p>
</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
