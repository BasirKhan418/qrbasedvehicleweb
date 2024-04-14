import React, { useState } from 'react'
import { useRouter } from 'next/router'
const VehicleControlPanel = () => {
    const [step, setStep] = useState(1);
    const [open,setOpen] = useState(false);
  return (
    <div className='min-h-screen mt-6'>
     <div className="container mx-auto p-8 bg-white rounded ">
  <h1 className="text-3xl font-bold mb-8 text-blue-600">VehicleControl Panel</h1>
  {/* Steps */}
 { step==1&&<><div className="flex items-center mb-8 space-x-4">
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
      1
    </div>
    <div>
      <h2 className="text-lg font-semibold poppins-bold">Step 1: Setup Phase 1</h2>
      <p className="text-gray-600 poppins-bold">Configure initial settings</p>
      <p className="text-gray-600 poppins-medium">To start the vehicle, turn on the first switch of the vehicle.</p>
    </div>
  </div>
  <div className="flex items-center mb-8 space-x-4">
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
      2
    </div>
    <div>
      <h2 className="text-lg font-semibold poppins-bold">Step 2: Connectivity</h2>
      <p className="text-gray-600 poppins-medium">Turning on your wifi . If possible turn of your internet (optional).</p>
    </div>
  </div>
  <div className="flex items-center mb-8 space-x-4">
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
      3
    </div>
    <div>
      <h2 className="text-lg font-semibold poppins-bold">Step 3: Connect to the wifi</h2>
      <p className="text-gray-600 poppins-medium">To connect to the Wi-Fi, select the <span className='text-green-600 font-bold'>`vehicle`</span> from the available networks, enter the password <span className='text-green-600 font-bold'>`123456789`</span>, and click on `Connect``. Then You have successfully connected.</p>
  
    </div>
  </div>
  <div className="flex items-center mb-8 space-x-4">
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
      4
    </div>
    <div>
      <h2 className="text-lg font-semibold poppins-bold">Step 4: Confirm Click on Below Option to Perform Operation</h2>
      {  open&&<p className="poppins-medium text-red-600">See below of the page for the result. ⬇️⬇️⬇️</p>}
     <div className='flex flex-wrap  flex-col lg:flex-row'>
     <button  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 w-64 mx-2"
     onClick={()=>setOpen(true)}
     > Open Below of the same Page</button>

     <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 mx-2 w-64"
        href="http://192.168.4.1/" target="_blank"
     > Open in a new tab</a>
     </div>
    </div>
  </div></>}
  { step==2&&<><div className="flex items-center mb-8 space-x-4">
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
      1
    </div>
    <div>
      <h2 className="text-lg font-semibold poppins-bold">Step 1: Setup Phase 2</h2>
      <p className="text-gray-600 poppins-bold">Configure initial settings</p>
      <p className="text-gray-600 poppins-medium">To start the vehicle, turn on the first switch of the vehicle.</p>
    </div>
  </div>
  <div className="flex items-center mb-8 space-x-4">
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
      2
    </div>
    <div>
      <h2 className="text-lg font-semibold poppins-bold">Step 2: Connectivity</h2>
      <p className="text-gray-600 poppins-medium">Turning on your wifi . If possible turn of your internet (optional).</p>
    </div>
  </div>
  <div className="flex items-center mb-8 space-x-4">
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
      3
    </div>
    <div>
      <h2 className="text-lg font-semibold poppins-bold">Step 3: Connect to the wifi</h2>
      <p className="text-gray-600 poppins-medium">To connect to the Wi-Fi, select the <span className='text-green-600 font-bold'>`car`</span> from the available networks, enter the password <span className='text-green-600 font-bold'>`123456789`</span>, and click on `Connect``. Then You have successfully connected.</p>
  
    </div>
  </div>
  <div className="flex items-center mb-8 space-x-4">
    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
      4
    </div>
    <div>
      <h2 className="text-lg font-semibold poppins-bold">Step 4: Confirm Click on Below Option to Perform Operation</h2>
      {  open&&<p className="poppins-medium text-red-600">See below of the page for the result. ⬇️⬇️⬇️</p>}
     <div className='flex flex-wrap  flex-col lg:flex-row'>
     <button  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 w-64 mx-2"
     onClick={()=>setOpen(true)}
     > Open Below of the same Page</button>
     <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 mx-2 w-64 "
        href="http://192.168.4.1/" target="_blank"
     > Open in a new tab</a>
     </div>
    </div>
  </div></>}
  {/* Buttons */}
  <div className="flex justify-between">
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
    onClick={()=>{
        if(step>=2){
            setStep(step-1)
        }
    }}
    >
      Back
    </button>
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
    onClick={()=>{
        if(step<=1){
            setStep(step+1)
            setOpen(false)
        }
    }}
    >
      Next
    </button>
  </div>
</div>

{open&&<div className="container mx-auto p-8 bg-white rounded my-4">
<h1 className='text-xl poppins-bold text-blue-600'>Control Panel for Operation Section</h1>
    <iframe src="http://192.168.4.1/" frameborder="0" className='h-[100vh] w-full'></iframe>
    </div>}

    </div>
  )
}

export default VehicleControlPanel
