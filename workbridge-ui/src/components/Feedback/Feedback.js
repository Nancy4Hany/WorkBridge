import React from "react"


export default function Feedback() {
  return (
// {/* <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
//   <h3 class="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
//     Testimonials
//   </h3>
//   <p class="mb-6 pb-2 md:mb-12 md:pb-0">
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
//     amet numquam iure provident voluptate esse quasi, veritatis totam
//     voluptas nostrum quisquam eum porro a pariatur veniam.
//   </p>
// </div> */}


<div class="grid gap-6 text-center md:grid-cols-3 lg:gap-12 flex items-center py-12 grid justify-items-center m-8 pb-8"> 
 
  <div class="mb-12 md:mb-0 rounded-lg border-2 border-fuchsia-700 m-8 shadow-2xl shadow-indigo-500/50 pb-8 px-8">
    <div class="mb-6 flex justify-center py-4">
      <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">
      Web Developer
    </h6>
    <p class="mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2 text-center" viewBox="0 0 24 24">
        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. Quod eos
      id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
    </p>
    <ul class="flex justify-center">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-gray-300" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
      </li>
    </ul>
  </div>

  <div class="mb-12 md:mb-0 rounded-lg border-2 border-fuchsia-700 m-8 shadow-2xl shadow-indigo-500/50 pb-8 px-8">
    <div class="mb-6 flex justify-center py-4">
      <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg" class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 class="mb-4 text-xl font-semibold">John Doe</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">
      Designer
    </h6>
    <p class="mb-4 flex justify-center ">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
      id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
    </p>
    <ul class="flex justify-center">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-gray-300" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
      </li>
    </ul>
  </div>

 
  <div class="mb-12 md:mb-0 rounded-lg border-2 border-fuchsia-700 m-8 shadow-2xl shadow-indigo-500/50 pb-8 px-8">
    <div class="mb-6 flex justify-center py-4">
      <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg" class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 class="mb-4 text-xl font-semibold">Jane Smith</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">
      Marketer
    </h6>
    <p class="mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
      id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
    </p>
    <ul class="flex justify-center px-4">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-6 w-6 text-gray-300" viewBox="0 0 24 24">
          <path d="M12 15.913l-6.761 4.11 2.058-7.13-5.52-4.27 7.22-.13L12 1.087l2.003 7.524 7.22.13-5.52 4.27 2.058 7.13L12 15.912z" />
        </svg>
      </li>
    </ul>
  </div>
</div>

  );
}