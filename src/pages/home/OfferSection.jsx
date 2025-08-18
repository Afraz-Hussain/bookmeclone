import React from 'react'

const OfferSection = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold '>Offers</h2>
      <span className='text-gray-600'>
      Promotions, deals, and special offers for you
      </span>
      <div className='flex gap-4'>

<div className='border border-gray-300 rounded-md p-4 w-100'>
<div>
<h2 className="font-medium">Quick escape, quality time</h2>
<p>Save up to 20% with a Getaway Deal</p>
<button className='bg-[#003B95] hover:bg-[#006CE4] text-white font-medium p-1 mt-2 rounded-sm hover:cursor-pointer '>
Save On Stays</button>
</div>
<div>
   
</div>
</div>

<div className=' border border-gray-400 p-3 rounded-md bg-black'>

<span className='text-[12px] text-white'>Vacation rentals</span>
<h2 className='font-medium text-white'>Live the dream in a vacation home</h2>
<h2 className='text-white'>Choose from houses, villas, cabins, and more</h2>
<button className='bg-[#006CE4] hover:bg-[#003B95] text-white font-medium p-1 mt-2 rounded-sm hover:cursor-pointer '>Book Yours</button>


</div>
      </div>
    </div>
  )
}

export default OfferSection
