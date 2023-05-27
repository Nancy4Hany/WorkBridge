import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 


export default function ScheduleInterview() {
    return (
     
<form class = "ml-40 mr-40 mt-14 mb-28 bg-fuchsia-200 items-center justify-center " >
    
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-dark-purple md:text-5xl lg:text-6xl dark:text-white text-center">We invest in the <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</span></h1>
<p class="text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-400 text-justify pl-14">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

        <div class="grid gap-6 mb-6 md:grid-cols-2 m-8">
        <div>
            <label for="first_name" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interviewer Full Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32" placeholder="John Mina George" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interviewee Full Name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-purple text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nancy Nouran Hamza" required/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-lg font-medium text-purple dark:text-white">Company</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Workbridge" required/>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interviewee Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label for="website" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interview Location</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="The United States Capitol is located at First St SE in Washington, DC 20004" required/>
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interview Date</label>
            <input type='date' placeholder="10/06/2002" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 

        </div>
    </div>
    <div class="mb-6 m-8">
        <label for="email" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interviewee Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <button type="submit" class="rounded-full bg-light-purple text-white text-center w-full mt-4 text-lg pr-12 pl-12 h-12">Submit</button>
    
</form>

    );
  }