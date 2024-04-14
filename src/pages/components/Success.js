import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
const Success = () => {
    const router = useRouter();
    useEffect(()=>{
     let email = localStorage.getItem('email');
        let name = localStorage.getItem('name');
        let phone = localStorage.getItem('phone');
        let orderid = router.query.id;
        let km = localStorage.getItem('km');
        let price = localStorage.getItem('totalprice');
        let type = localStorage.getItem('service');
        SendMail(email,name,phone,orderid,type,km,price,type);
        sendToAdmin(email,name,phone,orderid,type,km,price);
    },[router.query.id])
    
    const SendMail = async(email,name,phone,orderid,type,km,price)=>{
        const data = {email,name,phone,orderid,type,km,price};
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/senduemail`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const final = await res.json();
        if(final.success){
            console.log('Mail sent');
        }
        else{
            console.log('Mail not sent');
        }
    }
    const sendToAdmin = async(email,name,phone,orderid,type,km,price)=>{
        const data = {email,name,phone,orderid,type,km,price};
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sendadminemail`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const final = await res.json();
        if(final.success){
            console.log('Mail sent');
        }
        else{
            console.log('Mail not sent');
        }
    }
  return (
    <div >
    
        <div className=" bg-gray-100 flex justify-center  h-[100vh]">
            <div className=" w-[100vw] lg:w-[80vw] bg-white rounded-lg shadow-lg overflow-hidden md:w-[80vw]">
                
                <div className="px-6 py-8">
                <div className='flex justify-center items-center flex-col'>
       <div className="animate-tickScale inline-block bg-green-600 rounded-full ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
          </div>
          <h1 className="text-4xl font-semibold text-gray-800 mb-4 navfont">Congratulations! Booking Confirmed! </h1>
        
          <p className="text-lg text-gray-600 mb-4 font">Your booking has been successfully placed.</p>
    </div>
                   
                    
                    <div className="mb-6">
                        <p className="text-gray-600 text-center"> Here are the details: Booking id : <span className='text-green-600 font-bold'>{router.query.id}</span></p>
                    </div>
                   
                  
                    <div className="mt-8 flex justify-center items-center">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
                        onClick={()=>router.push(`/components/VehicleControlPanel?id=${router.query.id}`)}
                        >Get the Vehicle Control Panel</button>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Success
