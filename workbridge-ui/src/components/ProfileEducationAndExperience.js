import React from 'react';
export default function ProfileEditEducationAndExperience() {
    return (
// <!-- component -->
<form className='m-12' action='ProfileEditConfirmation'>
<div class="p-5">
<div class="mx-4 p-4">
        <div class="flex items-center">
            <div class="flex items-center text-teal-600 relative bg-light-green rounded-full">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Personal</div>
            </div>
            <div class="flex-auto border-t-4 transition duration-150 ease-out hover:ease-in border-dark-green"></div>
            <div class="flex items-center text-white relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-light-green rounded-full-600 border-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Account</div>
            </div>
            <div class="flex-auto border-t-4 transition duration-500 ease-in-out border-gray-300 border-dark-green"></div>
            <div class="flex items-center text-gray-500 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300 bg-light-green rounded-full">
                <svg fill="#000000" viewBox="0 0 20 20" width = '100%' height='100%' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3.302 12.238c.464 1.879 1.054 2.701 3.022 3.562 1.969.86 2.904 1.8 3.676 1.8.771 0 1.648-.822 3.616-1.684 1.969-.861 1.443-1.123 1.907-3.002L10 15.6l-6.698-3.362zm16.209-4.902l-8.325-4.662c-.652-.365-1.72-.365-2.372 0L.488 7.336c-.652.365-.652.963 0 1.328l8.325 4.662c.652.365 1.72.365 2.372 0l5.382-3.014-5.836-1.367a3.09 3.09 0 0 1-.731.086c-1.052 0-1.904-.506-1.904-1.131 0-.627.853-1.133 1.904-1.133.816 0 1.51.307 1.78.734l6.182 2.029 1.549-.867c.651-.364.651-.962 0-1.327zm-2.544 8.834c-.065.385 1.283 1.018 1.411-.107.579-5.072-.416-6.531-.416-6.531l-1.395.781c0-.001 1.183 1.125.4 5.857z"></path></g></svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Education and Experience</div>
            </div>
            <div class="flex-auto border-t-4 transition duration-500 ease-in-out border-dark-green"></div>
            <div class="flex items-center text-gray-500 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database ">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm</div>
            </div>
        </div>
    </div>
    <div class="mt-8 p-4">
        <div>
            <div class="font-bold text-4xl text-purple mb-4 pb-12 leading-8 h-6 mx-2 mt-3">Education: </div>
            <div class="flex flex-col md:flex-row">
            
                <div class="w-full flex-1 mx-2 svelte-1l8159u">
                <label className='font-bold mt-8 uppercase text-sm'>University Name</label>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input type = 'text' placeholder="University Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                </div>
                <div class="w-full flex-1 mx-2 svelte-1l8159u">
                <label className='font-bold mt-8 uppercase text-sm'>Major</label>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                       
                        <input placeholder="Major" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Start Date</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input type='date' placeholder="06/09/2020" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                </div>
                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> End Date</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input type='date'placeholder="10/07/2024" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                </div>
            </div>
            <div class="font-bold text-4xl text-purple mb-4 pt-12 pb-12 leading-8 h-6 mx-2 mt-3">Experience: </div>
            <div class="flex flex-col md:flex-row">
            
                <div class="w-full flex-1 mx-2 svelte-1l8159u">
                <label className='font-bold mt-8 uppercase text-sm'>Organisation Name</label>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input type = 'text' placeholder="e.g. ALX" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                </div>
                <div class="w-full flex-1 mx-2 svelte-1l8159u">
                <label className='font-bold mt-8 uppercase text-sm'>Job Title</label>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                       
                        <input placeholder="e.g. Intern" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Start Date</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input type='date' placeholder="06/09/2020" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                </div>
                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> End Date</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input type='date'placeholder="10/07/2024" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"/> </div>
                </div>
            </div>
        </div>
        <div class="flex p-2 mt-4">
            <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-dark-blue 
        bg-light-blue 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition">Previous</button>
            <div class="flex-auto flex flex-row-reverse">
               <button type = 'submit' class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-light-green  
        bg-new-purple
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition">Save and Next</button>
                <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-new-purple  
        bg-new-purple 
        text-white-200 
        border duration-200 ease-in-out 
        border-teal-600 transition">Skip</button>
            </div>
        </div>
    </div>
</div>
</form>
 )
}