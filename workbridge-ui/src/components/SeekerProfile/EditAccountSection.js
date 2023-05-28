import React from 'react';
export default function EditAccountSection() {
    return (
// <!-- component -->
<form className='m-12 '>
    
<div class="p-5">
    <div class="mx-4 p-4">
        <div class="flex items-center">
            <div class="flex items-center text-teal-600 relative bg-light-green rounded-full">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#000000" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Personal</div>
            </div>
            <div class="flex-auto border-t-4 transition duration-150 ease-out hover:ease-in border-dark-green"></div>
            <div class="flex items-center text-white relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-light-green rounded-full-600 border-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#000000" class="bi bi-person-plus-fill" viewBox="0 0 16 16"> <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/> </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Account</div>
            </div>
            <div class="flex-auto border-t-4 transition duration-500 ease-in-out  border-dark-green"></div>
            <div class="flex items-center text-gray-500 relative border-black">
                <div class="rounded-full transition  duration-500 ease-in-out h-12 w-12 py-3 border-2 border-white bg-white">
                <svg fill="#000000" viewBox="0 0 20 20" width = '100%' height='100%' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3.302 12.238c.464 1.879 1.054 2.701 3.022 3.562 1.969.86 2.904 1.8 3.676 1.8.771 0 1.648-.822 3.616-1.684 1.969-.861 1.443-1.123 1.907-3.002L10 15.6l-6.698-3.362zm16.209-4.902l-8.325-4.662c-.652-.365-1.72-.365-2.372 0L.488 7.336c-.652.365-.652.963 0 1.328l8.325 4.662c.652.365 1.72.365 2.372 0l5.382-3.014-5.836-1.367a3.09 3.09 0 0 1-.731.086c-1.052 0-1.904-.506-1.904-1.131 0-.627.853-1.133 1.904-1.133.816 0 1.51.307 1.78.734l6.182 2.029 1.549-.867c.651-.364.651-.962 0-1.327zm-2.544 8.834c-.065.385 1.283 1.018 1.411-.107.579-5.072-.416-6.531-.416-6.531l-1.395.781c0-.001 1.183 1.125.4 5.857z"></path></g></svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Background </div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div class="flex items-center text-gray-500 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-white bg-white">
                <svg fill="#000000" width = '100%' height='100%' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm0 2c-7.7319865 0-14 6.2680135-14 14s6.2680135 14 14 14 14-6.2680135 14-14-6.2680135-14-14-14zm6.6208153 9.8786797c.3905243.3905242.3905243 1.0236892 0 1.4142135l-7.0710678 7.0710678c-.3626297.3626297-.9344751.3885319-1.3269928.0777064l-.0872208-.0777064-4.24264068-4.2426407c-.39052429-.3905242-.39052429-1.0236892 0-1.4142135.39052428-.3905243 1.02368928-.3905243 1.41421358 0l3.5348268 3.5348268 6.3646681-6.3632539c.3905243-.3905243 1.0236893-.3905243 1.4142136 0z"></path></g></svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm</div>
            </div>
        </div>
    </div>
    <div class="mt-8 p-4">
        <div className='flex flex-row '>
        <span className='text-2xl pt-8 pl-4 font-semibold text-purple'>Your Profile Photo : </span>
        <span className='text-2xl pt-8 pl-96 font-semibold text-purple'>Your Cover Photo : </span>
       
        </div>
        <div className='flex flex-row'>
       
     <div class="h-auto w-2/5 font-sans text-gray-900 border-black rounded-lg items-left justify-left flex justify-between order-1 pt-8">
     <div class="flex flex-row items-left justify-left w-full order-1 sm:max-w-lg">

        <div class="flex flex-col items-center justify-center w-full h-auto my-6 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
            <div class="mt-10 mb-10 text-center">
                <h2 class="text-2xl font-semibold mb-2">Upload your files</h2>
                <p class="text-xs text-black">File should be of format .jpeg, .jpg, .png or .svg</p>
            </div>
            <form action="#" class="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner">
                <input type="file" id="file-upload" class="hidden"/>
                <label for="file-upload" class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                    <p class="z-10 text-xs font-light text-center text-black">Drag & Drop your files here</p>
                    <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                </label>
            </form>
        </div>
      </div>
     </div>
         <div class="h-auto w-2/5 font-sans text-gray-900 border-black rounded-lg items-left justify-left flex justify-between order-1 pt-8">
         <div class="flex flex-row w-full sm:max-w-lg">

         <div class="flex flex-col items-center justify-center w-full h-auto my-6 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
            <div class="mt-10 mb-10 text-center">
                <h2 class="text-2xl font-semibold mb-2">Upload your files</h2>
                <p class="text-xs text-black">File should be of format .jpeg, .jpg, .png or .svg</p>
            </div>
            <form action="#" class="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner">
                <input type="file" id="file-upload" class="hidden"/>
                <label for="file-upload" class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                    <p class="z-10 text-xs font-light text-center text-black">Drag & Drop your files here</p>
                    <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                </label>
            </form>
          </div>
        </div>
       </div>
</div>
   <form className='flex flex-col mt-4'>
   <span className='text-2xl pt-1 pl-4 pb-4 font-semibold text-purple'>Your Bio : </span>

   <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg placeholder-black focus:placeholder-gray-500 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 light:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
   </form>

        <div class="flex p-2 mt-4">
            <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-purple  
        bg-new-purple
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition">Previous</button>
            <div class="flex-auto flex flex-row-reverse">
                <button type='submit' class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-mint 
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition">Save and Next</button>
                <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Skip</button>
            </div>
        </div>
    </div>
</div>
</form>
 )
}