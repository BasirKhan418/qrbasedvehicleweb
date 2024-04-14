import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-400'>
      <>
  {/* ========== FOOTER ========== */}
  <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    {/* Grid */}
    <div className="text-center">
      <div>
        <a
          className="flex-none text-xl font-semibold text-2xl font-bold bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent "
          href="#"
          aria-label="Brand"
        >
          QuVehl
        </a>
      </div>
      {/* End Col */}
      <div className="mt-3">
        <p className="text-gray-200">
          We are part of the{" "}
          <a
            className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 "
            href="#"
          >
            Quvehl
          </a>{" "}
          family.
        </p>
        <p className="text-gray-100">
          © Qrbasedvehicle.com. 2024 Quvehl. All rights reserved.
        </p>
      </div>
      {/* Social Brands */}
      
      {/* End Social Brands */}
    </div>
    {/* End Grid */}
  </footer>
  {/* ========== END FOOTER ========== */}
</>

    </div>
  )
}

export default Footer
