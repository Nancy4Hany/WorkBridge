import React from 'react';
export default function Profile() {
    return (
<div id="profile container">
<img class="w-40 h-18 rounded-full" src="../profiletest.png" alt="Rounded avatar"/>
<div class="w-full md:w-9/12 mx-2 h-64">
    <div class="bg-white p-3 shadow-sm rounded-sm">
        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span class="text-green-500">
                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </span>
            <span class="tracking-wide">About</span>
        </div>
        <div class="text-gray-700">
            <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">Hamza</div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">Mohamed</div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">Male</div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">0102133564</div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                        <a class="text-blue-800" href="mailto:jane@example.com">hamza@example.com</a>
                    </div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Birthday</div>
                    <div class="px-4 py-2">Feb 06, 1998</div>
                </div>
            </div>
        </div>
    </div>

    <div class="my-4"></div>


    <div class="bg-white p-3 shadow-sm rounded-sm">

        <div class="grid grid-cols-2">
            <div>
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </span>
                    <span class="tracking-wide">Bio</span>
                </div>
               <h1 class ="pr-4" >Masters Degree in OxfordMasters Degree in OxfordMasters Degree in OxfordMasters Degree in OxfordMasters Degree in OxfordMasters Degree in Oxford
               Masters Degree in OxfordMasters Degree in OxfordMasters Degree in OxfordMasters Degree in OxfordMasters Degree in OxfordMasters Degree in OxfordMasters Degree in Oxford
               </h1>
            </div>
            <div>
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path fill="#fff"
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </span>
                    <span class="tracking-wide">Education</span>
                </div>
                <ul class="list-inside space-y-2">
                    <li>
                        <div class="text-">Masters Degree in Oxford</div>
                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                        <div class="text-">Bachelors Degreen in LPU</div>
                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
    )
}