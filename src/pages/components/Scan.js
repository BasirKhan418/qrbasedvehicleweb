import React, { useState,useEffect } from 'react'
import QrReader from 'react-qr-scanner'
import { useRouter } from 'next/router'
const Scan = () => {
    const previewStyle = {
        height: 240,
        width: 320,
        borderRadius:'10px',
    }
    const constraints = {
        facingMode: {exact: "environment" },
      };
      const handleScan = (data) => {
        let a = document.getElementById('rightaudio');
        if (data) {
          console.log(data.text)
          setTicket(data.text);
          setDelay(false);
          a.play();
        }
      }
      const handleError = (err) => {
        let a = document.getElementById('wrongaudio');
        a.play();
        console.log(err);
      }
    const router = useRouter();
    const [ticket,setTicket] = useState("");
    const [delay,setDelay] = useState(false);
    const [open,setOpen]=useState(false);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{ 
setTimeout(()=>{
setDelay(true);
},2000)
    },[])

    const handleChange=(e)=>{  
        if(e.target.name=="ticket"){
            setTicket(e.target.value);
        }
    }
   
    
  return (
    <div className='bg-blue-400 min-h-screen'>
      <main
    id="content"
    role="main"
    className="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto w-full h-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 mb-10"
  >
    <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-2xl text-white sm:text-4xl">
        Scan the QR Code to Rent a Vehicle
      </h1>
      <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
        <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
          Scan Now
        </span>
      </h2>
    <div>
        <audio src="/qrrightaudio.mp3" id='rightaudio'></audio>
        <audio src="/qrwrongaudio.mp3" id='wrongaudio'></audio>
    {delay&&<div className='flex justify-center my-4 rounded-lg'><QrReader
          style={previewStyle}
          delay={300}
          onError={handleError}
          onScan={handleScan}
          key="environment"
          constraints={{
          audio: false,
          video: { facingMode: "environment" }}}
          />
          </div>}
    </div>
    
      <div>
        <div className="mt-8 space-y-4">
         
          <div>
            <label
              htmlFor="hs-cover-with-gradient-form-email-1"
              className="sr-only"
            >
              UUI ID
            </label>
            <div className="relative">
              <input
                type="text"
                name='ticket'
                onChange={handleChange}
                value={ticket}
                id="hs-cover-with-gradient-form-email-1"
                className="py-3 ps-11 pe-4 block w-full bg-blue-300 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11"
                placeholder="UUI ID"
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">

               
              </div>
            </div>
          </div>
          
          <div className="grid">
            <button
              type="submit"
              className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600  text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              
            >
             Get Now
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default Scan
