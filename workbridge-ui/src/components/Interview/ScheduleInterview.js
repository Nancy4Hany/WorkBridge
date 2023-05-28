import React, { useState } from "react";
import axios from 'axios';
 

const instance = axios.create({
    baseURL: 'http://localhost:8099',
    headers: {
      'Content-Type': 'application/json',
    },
  });
export default function ScheduleInterview() {
  const [formData, setFormData] = useState({
    interviewerName: '',
    intervieweeName: '',
    company: '',
    phoneNumber: '',
    location: '',
    interviewDate: '',
    email: '',
    meetingId: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create the email subject
      const emailSubject = `You are invited for an interview that will be held on ${formData.interviewDate}. Company name: ${formData.company}`;

      // Create the email message
      const emailMessage = `Use the following link to enter the meeting: http://localhost:3000/lobby\n\nThe meeting ID is: ${formData.meetingId}`;

      // Create the email object
      const email = {
        recipientEmailId: formData.email,
        emailSubject: emailSubject,
        emailMessage: emailMessage
      };

      // Send the email using Axios
      await instance.post('/email/send', email);

      // Reset the form data
      setFormData({
        interviewerName: '',
        intervieweeName: '',
        company: '',
        phoneNumber: '',
        location: '',
        interviewDate: '',
        email: '',
        meetingId: ''
      });

      // Display a success message or redirect the user
      console.log('Email sent successfully!');
    } catch (error) {
      // Handle any errors
      console.error('An error occurred while sending the email:', error);
    }
  };

  return (
    <form class="ml-40 mr-40 mt-14 mb-28 bg-fuchsia-200 items-center justify-center" onSubmit={handleSubmit}>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-dark-purple md:text-5xl lg:text-6xl dark:text-white text-center">We invest in the <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</span></h1>
      <p class="text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-400 text-justify pl-14">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

      <div class="grid gap-6 mb-6 md:grid-cols-2 m-8">
        <div>
          <label for="first_name" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interviewer Full Name</label>
          <input
            type="text"
            id="first_name"
            value={formData.interviewerName}
            onChange={(event) =>
              setFormData({
                ...formData,
                interviewerName: event.target.value
              })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32"
            placeholder="John Mina George"
            required
          />
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interviewee Full Name</label>
          <input
            type="text"
            id="last_name"
            value={formData.intervieweeName}
            onChange={(event) =>
              setFormData({
                ...formData,
                intervieweeName: event.target.value
              })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32"
            placeholder="John Mina George"
            required
          />
        </div>
      </div>

      <div class="grid gap-6 mb-6 md:grid-cols-2 m-8">
        <div>
          <label for="company" class="block mb-2 text-lg font-medium text-purple dark:text-white">Company</label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(event) =>
              setFormData({
                ...formData,
                company: event.target.value
              })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32"
            placeholder="Acme Corporation"
            required
          />
        </div>
        <div>
          <label for="phone_number" class="block mb-2 text-lg font-medium text-purple dark:text-white">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            value={formData.phoneNumber}
            onChange={(event) =>
              setFormData({
                ...formData,
                phoneNumber: event.target.value
              })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32"
            placeholder="123-456-7890"
            required
          />
        </div>
      </div>

      <div class="grid gap-6 mb-6 md:grid-cols-2 m-8">
        <div>
          <label for="location" class="block mb-2 text-lg font-medium text-purple dark:text-white">Location</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(event) =>
              setFormData({
                ...formData,
                location: event.target.value
              })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32"
            placeholder="San Francisco"
            required
          />
        </div>
        <div>
          <label for="interview_date" class="block mb-2 text-lg font-medium text-purple dark:text-white">Interview Date</label>
          <input
            type="text"
            id="interview_date"
            value={formData.interviewDate}
            onChange={(event) =>
              setFormData({
                ...formData,
                interviewDate: event.target.value
              })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32"
            placeholder="2023-05-31"
            required
          />
        </div>
      </div>

      <div class="grid gap-6 mb-6 md:grid-cols-2 m-8">
        <div>
          <label for="email" class="block mb-2 text-lg font-medium text-purple dark:text-white">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value
              })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label for="meeting_id" class="block mb-2 text-lg font-medium text-purple dark:text-white">Meeting ID</label>
          <input
            type="text"
            id="meeting_id"
            value={formData.meetingId}
            onChange={(event) =>
              setFormData({
                ...formData,
                meetingId: event.target.value
              })
            }
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-auto w-32"
            placeholder="123456789"
            required
          />
        </div>
      </div>

      <div class="flex justify-center mt-6">
        <button type="submit" class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:ring-offset-2">Schedule Interview</button>
      </div>
    </form>
  );
}
