import React from "react";

export default function InterviewsTable() {
  return (
    <div className="flex flex-col mt-12 mr-32 ml-32 ">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-dark-purple md:text-5xl lg:text-6xl dark:text-white text-center">We invest in the <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</span></h1>
<p class="text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-400 text-justify pl-14">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      <div className=" mt-12">
        <div className="flex justify-between py-3 pl-2">
          <form class="flex items-center">
            <div class="relative w-full ">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-dark-purple dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-purple text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden ">
          <div class="overflow-x-auto">
        <div class=" bg-gray-100 flex items-center justify-center bg-gray-100 font-sans ">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <table class=" w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left text-teal">Company</th>
                                <th class="py-3 px-6 text-center text-teal">Interviewee Name</th>
                                <th class="py-3 px-6 text-center text-teal">Interview Date</th>
                                <th class="py-3 px-6 text-center text-teal">Status</th>
                                <th class="py-3 px-6 text-center text-teal">Interviewee Email</th>
                                <th class="py-3 px-6 text-center text-teal">Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6" src="data:image/png;base64,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"/>
                                        </div>
                                        <span class="font-medium">Workbridge</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                        </div>
                                        <span>Eshal Rosas</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> 10/10/2023</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-light-green text-white py-1 px-3 rounded-full text-xs">Completed</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> Nancy@gmail.com</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/07/attachment_94444348-e1594735799301.png?auto=format&q=60&fit=max&w=930"/>
                                        </div>
                                        <span class="font-medium">Workbridge</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                        </div>
                                        <span>Anita Rodriquez</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> 11/03/2023</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-light-orange text-green-600 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> Anita@gmail.com</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6" src="https://www.studio1hub.com/wp-content/uploads/2022/08/Best-Professional-Logo-Designer-Company-in-Pune-1024x535.webp"/>
                                        </div>
                                        <span class="font-medium">Workbridge</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                        </div>
                                        <span>Eshal Rosas</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> 10/10/2023</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-red text-white py-1 px-3 rounded-full text-xs">Canceled</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> Walaa@gmail.com</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6" src="https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf="/>
                                        </div>
                                        <span class="font-medium">Workbridge</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/4.jpg"/>
                                        </div>
                                        <span>Tarik Novak</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> 10/10/2023</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-light-green text-white py-1 px-3 rounded-full text-xs">Completed</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> Tarik@gmail.com</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5363223.jpg"/>
                                        </div>
                                        <span class="font-medium">Workbridge</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/5.jpg"/>
                                        </div>
                                        <span>Oscar Howard</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> 10/10/2023</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-light-green text-white py-1 px-3 rounded-full text-xs">Completed</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> Tarik@gmail.com</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6" src="https://www.zarla.com/assets/images/logo-2-xl-en-20220110.png"/>
                                        </div>
                                        <span class="font-medium">Workbridge</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/6.jpg"/>
                                        </div>
                                        <span>Melisa Moon</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> 10/10/2023</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-light-orange text-white py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> Melisa@gmail.com</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6" src="https://www.brandbucket.com/images5/gc/logo-envato.png?"/>
                                        </div>
                                        <span class="font-medium">Workbridge</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/7.jpg"/>
                                        </div>
                                        <span>Cora Key</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> 10/10/2023</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-light-green text-white py-1 px-3 rounded-full text-xs">Completed</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> Tarik@gmail.com</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU"/>
                                        </div>
                                        <span class="font-medium">Workbridge</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/8.jpg"/>
                                        </div>
                                        <span>Kylan Dorsey</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> 10/10/2023</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="bg-light-green text-white py-1 px-3 rounded-full text-xs">Completed</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span className="font-mono"> Kylan@gmail.com</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
