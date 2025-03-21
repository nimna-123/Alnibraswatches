import React from 'react'

const PlaceOrder = () => {
  return (
    <div className='px-5 py-8 flex flex-col  gap-5 '>
        <h1 className='uppercase text-[#5E666C] text-lg'>Order summary</h1>
        <div className=' flex justify-between'>
            <h1 className='text-[#303A42] text-lg'>Total <span className='text-[#5E666C]'>(3 items)</span></h1>
            <h1 className='text-[#0D1217]'>24000</h1>
        </div>
        <div className=' flex justify-between text-xl text-[#303A42]'>
            <h1>Total Payable</h1>
            <h1>24000</h1>
        </div>
        <h1 className='text-sm text-[#30933A]'>You totoly saved 5000. hurray!..</h1>
        <h1 className='font-medium text-[#303A42]'>Do you have Voucher code</h1>
        <button className='px-6 py-3 bg-[#00211E] font-bold text-base text-white w-full rounded-lg'>
            Place Order
        </button>
    </div>
  )
}

export default PlaceOrder