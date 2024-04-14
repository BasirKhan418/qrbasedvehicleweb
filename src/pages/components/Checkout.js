import React, { useEffect ,useState} from 'react';
import { FaRegUser } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { useRouter } from 'next/router'
const Checkout = () => {
    const router = useRouter();
    useEffect(()=>{
    console.log(router.query.ty)
   let pricevar = router.query.p!=null?router.query.p:0;
   setPrice(pricevar);
   let actprice = pricevar!=0?(18/100)*pricevar:0;
   let actii = Number(actprice);
   setActualPrice(actprice);
    setTotalPrice(+pricevar+actii);
  
    },[])
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [distance,setDistance] = useState(0);
    const [price,setPrice] = useState(0);
    const [actualprice,setActualPrice] = useState(0);
    const [totalprice,setTotalPrice] = useState(0);
    const handleChange=(e)=>{
        if(e.target.name=="email"){
            setEmail(e.target.value);
        }
        if(e.target.name=="phone"){
            setPhone(e.target.value);
        }
        if(e.target.name=="name"){
            setName(e.target.value);
        }
        if(e.target.name=="address"){
            setAddress(e.target.value);
        }
        if(e.target.name=="distance"){
            setDistance(e.target.value);
            setPrice(e.target.value*10);
            setActualPrice(e.target.value!=0?(18/100)*(e.target.value*10):0);
            setTotalPrice(e.target.value!=0?(e.target.value*10)+((18/100)*(e.target.value*10)):0);
        }
        if(e.target.name=="price"){
            setPrice(e.target.value);
        }
    }
  return (
    <div className='mt-0 mb-8'>
      <>
  <div className="flex flex-col items-center border-b bg-blue-600 py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <p  className="text-2xl font-bold text-gray-200">
        QUVEHL CHECKOUT
    </p>
    <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div className="relative">
        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </a>
            <span className="font-semibold text-gray-200">Select Plan</span>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white ring ring-gray-200 ring-offset-2"
              href="#"
            >
              2
            </a>
            <span className="font-semibold text-gray-200">Booking</span>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <li className="flex items-center space-x-3 text-left sm:space-x-4">
            <a
              className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white"
              href="#"
            >
              3
            </a>
            <span className="font-semibold text-gray-200">Payment</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 ">
    <div className="px-4 pt-8">
      <p className="text-xl font-medium">Booking Summary</p>
      <p className="text-blue-600">
        Check your items. And fill all the details.
      </p>
      <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
          <img
            className="m-2 h-24 w-28 rounded-md border object-cover object-center"
            src="/pimg.png"
            alt=""
          />
          <div className="flex w-full flex-col px-4 py-4">
            <span className="font-semibold">
              QuVehl S1 Pro - {router.query&&router.query.ty}
            </span>
            <span className="float-right text-gray-400">{router.query.t!=null?router.query.t:distance+"KM"}</span>
            <p className="text-lg font-bold"> ₹{router.query.p!=null?router.query.p:price}</p>
          </div>
        </div>
        
      </div>
      
    </div>
    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p className="text-xl font-medium">Payment Details</p>
      <p className="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div className="">
        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
          Email
        </label>
        <div className="relative">
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="your.email@gmail.com"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
        </div>
        <label
          htmlFor="card-holder"
          className="mt-4 mb-2 block text-sm font-medium"
        >
          Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="card-holder"
            name="name"
            value={name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter Your Full Name"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <FaRegUser  className="h-4 w-4 text-gray-400" />
            
          </div>
        </div>
        <label
          htmlFor="card-holder"
          className="mt-4 mb-2 block text-sm font-medium"
        >
            Phone
        </label>
        <div className="relative">
          <input
            type="text"
            id="card-holder"
            name="phone"
            value={phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <CiPhone  className="h-4 w-4 text-gray-400" />
            
          </div>
        </div>
      { router.query.ty=="customize"&&<> <label
          htmlFor="card-holder"
          className="mt-4 mb-2 block text-sm font-medium"
        >
            Enter Distance (in KM)
        </label>
        <div className="relative">
          <input
            type="number"
            id="card-holder"
            name="distance"
            value={distance}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <CiPhone  className="h-4 w-4 text-gray-400" />
            
          </div>
        </div></>}
      
        
        
        {/* Total */}
        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900"> ₹{price}.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Tax (18%GST)</p>
            <p className="font-semibold text-gray-900"> ₹{actualprice}.00</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900"> ₹{totalprice}.00</p>
        </div>
      </div>
      <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
        Place Order & Pay
      </button>
    </div>
  </div>
</>

    </div>
  )
}

export default Checkout
