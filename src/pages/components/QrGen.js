import React, { useState } from 'react'
import QRCode from "react-qr-code";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
const QrGen = () => {
    const [value,setValue] = useState("");
    const [show,setShow] = useState(false);
    const handleChange=(e)=>{
        if(e.target.name=="hs-search-article-1"){
            setValue(e.target.value);
        }
    }
    const captureImage = async () => {
        try {
          const dataUrl = await htmlToImage.toPng(
            document.getElementById(`qrcode`),
            { quality: 0.95 }
          );
    
          var link = document.createElement('a');
          link.download = 'qrcode.png';
    
          // You may want to append the link to the body before triggering the download
          // document.body.appendChild(link);
    
          link.href = dataUrl;
          link.click();
        } catch (error) {
          console.error('Error capturing image:', error);
        }
      };
  return (
    <div className='min-h-screen flex justify-center items-center'>
    <>
  {/* Hero */}
  <div className="relative overflow-hidden">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
        Generate Qr Code
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
        Generate Qr Code for your Vehicle
        </p>
        <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
          {/* Form */}
         
            <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
              <div className="flex-[1_0_0%]">
                <label
                  htmlFor="hs-search-article-1"
                  className="block text-sm text-gray-700 font-medium dark:text-white"
                >
                  <span className="sr-only">Generate Qr Code </span>
                </label>
                <input
                  type="url"
                  name="hs-search-article-1"
                    onChange={handleChange}
                    value={value}
                  id="hs-search-article-1"
                  className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter Your URL Here (UUUI ID)"
                />
              </div>
              <div className="flex-[0_0_auto]">
               { !show&&<button
                  className="p-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
               onClick={()=>setShow(true)}
                >
                    Generate
                </button>}
                { show&&<button
                  className="p-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
               onClick={()=>{
                setShow(false)
                setValue("");
            }}
                >
                    Clear
                </button>}
              </div>
            </div>
        <div className='flex justify-center items-center'>
            { show&& <div className='flex justify-center items-center my-6 bg-blue-600  rounded  w-96 h-[70vh] flex-col ' id='qrcode'>
                <h1 className='text-white poppins-bold text-4xl my-6 font-bold'>Scan Qr Code</h1>
         <QRCode
    size={256}
    style={{ height: "300", maxWidth: "100%", width: "300" }}
    value={value}
    viewBox={`0 0 256 256`}
    />
   <p className='text-blue-100 poppins-bold  my-6 font-medium p-1 w-80'> Unlock Your Ride .Instant Vehicle Rental via QR Code Scan! </p>
          </div>}
          </div>
          <div>
            { show&&<button className='m-2 p-4 rounded-full text-white poppins-medium bg-blue-600' onClick={captureImage}>Download Now</button>}
          </div>
          {/* End Form */}
          {/* SVG Element */}
          <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
            <svg
              className="w-16 h-auto text-orange-500"
              width={121}
              height={135}
              viewBox="0 0 121 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                stroke="currentColor"
                strokeWidth={10}
                strokeLinecap="round"
              />
              <path
                d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                stroke="currentColor"
                strokeWidth={10}
                strokeLinecap="round"
              />
              <path
                d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                stroke="currentColor"
                strokeWidth={10}
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* End SVG Element */}
          {/* SVG Element */}
          <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
            <svg
              className="w-40 h-auto text-cyan-500"
              width={347}
              height={188}
              viewBox="0 0 347 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                stroke="currentColor"
                strokeWidth={7}
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* End SVG Element */}
        </div>
        
      </div>
    </div>
  </div>
  {/* End Hero */}
</>

   

    </div>
  )
}

export default QrGen
