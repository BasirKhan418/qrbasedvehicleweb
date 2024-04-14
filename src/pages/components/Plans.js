import React from 'react'
import { useRouter } from 'next/router'
const Plans = () => {
    const router = useRouter();
  return (
    <div className='bg-blue-100'>
      <>
  {/* Pricing */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        Plans
      </h2>
      <p className="mt-1 text-black poppins-medium">
        Whatever your status, our offers evolve according to your needs.
      </p>
    </div>
    {/* End Title */}
    {/* Switch */}
   
    {/* End Switch */}
    {/* Grid */}
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
      {/* Card */}
      <div className="flex flex-col  text-center rounded-xl p-8 dark:border-gray-700  border-2 border-blue-600 bg-blue-200">
        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
          Starter
        </h4>
        <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
        ₹199
        </span>
        <p className="mt-2 text-sm text-gray-500">20KM</p>
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 dark:text-gray-400">1 user</span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 dark:text-gray-400">
              20km per booking
            </span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 dark:text-gray-400">
            Standard Cars available
            </span>
          </li>
        </ul>
        <button
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none"
          onClick={()=>{router.push('/components/Checkout?p=199&&t=20KM&&ty=starter')}}
        >
          Book Now
        </button>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700 bg-blue-600">
        <p className="mb-3">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
            Most popular
          </span>
        </p>
        <h4 className="font-medium text-lg text-gray-100">
          Premium
        </h4>
        <span className="mt-5 font-bold text-5xl text-gray-200">
          <span className="font-bold text-2xl -me-2">₹</span>
          399
        </span>
        <p className="mt-2 text-sm text-gray-200">
          All the basics for average travelling
        </p>
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-200">1 person</span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-200">
              50km per booking
            </span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-200">
            Standard Cars available
            </span>
          </li>
        </ul>
        <button
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-blue-600 hover:bg-blue-800  hover:text-blue-100 disabled:opacity-50 disabled:pointer-events-none"
          onClick={()=>{router.push('/components/Checkout?p=399&&t=50KM&&ty=premium')}}
        >
          Book Now
        </button>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="flex flex-col border border-blue-600 text-center rounded-xl p-8 dark:border-gray-700 bg-blue-200">
        <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
        Business
        </h4>
        <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
          <span className="font-bold text-2xl -me-2">₹</span>
          899
        </span>
        <p className="mt-2 text-sm text-gray-500">
          Everything you need for a growing business
        </p>
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 dark:text-gray-400">5 users</span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 dark:text-gray-400">
              100km per booking
            </span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-800 dark:text-gray-400">
             Premium Cars available
            </span>
          </li>
        </ul>
        <button
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none"
          onClick={()=>{router.push('/components/Checkout?p=899&&t=100KM&&ty=business')}}
        >
            Book Now
        </button>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700 bg-blue-600">
        <h4 className="font-medium text-lg text-gray-200">
          Customize
        </h4>
        <span className="mt-5 font-bold text-5xl text-gray-200">
          <span className="font-bold text-2xl -me-2">₹</span>
         9 (Starting)
        </span>
        <p className="mt-2 text-sm text-gray-200">
          customize your features according to your needs.
        </p>
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-200">Starting from 1 user</span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-200">
              Starting from 1km per booking
            </span>
          </li>
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-gray-200">
              Product support
            </span>
          </li>
        </ul>
        <button
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
          onClick={()=>{router.push('/components/Checkout?ty=customize')}}
        >
          Book Now
        </button>
      </div>
      {/* End Card */}
    </div>
    {/* End Grid */}
    {/* Comparison table */}
 
    {/* End Comparison table */}
  </div>
  {/* End Pricing */}
</>

    </div>
  )
}

export default Plans
