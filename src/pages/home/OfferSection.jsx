const OfferSection = () => {
  return (
    <div className="px-4 md:px-8">
      <h2 className="text-2xl font-bold">Offers</h2>
      <span className="text-gray-600">
        Promotions, deals, and special offers for you
      </span>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        
        {/* First Box */}
        <div className="flex justify-between border border-gray-300 rounded-md p-4 flex-1 min-h-[140px] bg-white h-25">
          <div>
            <h2 className="font-medium">Quick escape, quality time</h2>
            <p className="text-sm">Save up to 20% with a Getaway Deal</p>
            <button className="bg-[#003B95] hover:bg-[#006CE4] text-white font-medium px-3 py-1 mt-2 rounded-md hover:cursor-pointer">
              Save On Stays
            </button>
          </div>
          <div>
            <img
              src="pics/cust.jpeg"
              className="rounded-md w-20 h-20 object-cover"
              alt="offer"
            />
          </div>
        </div>

        {/* Second Box */}
        <div
          className="border border-gray-400 p-3 rounded-md flex-[1.1] min-h-[130px] bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: "url('pics/pic02.jpeg')" }}
        >
          <div>
            <span className="text-[12px] text-white">Vacation rentals</span>
            <h2 className="font-bold text-lg md:text-xl text-white mt-1 max-w-[280px]">
              Live the dream in a vacation home
            </h2>
            <p className="text-white text-sm leading-tight">
              Choose from houses, villas, cabins, and more
            </p>
          </div>
          <button className="bg-[#006CE4] hover:bg-[#003B95] text-white font-medium px-2 py-1 rounded-md mt-2 hover:cursor-pointer w-fit text-sm">
            Book Yours
          </button>
        </div>
      </div>
    </div>
  )
}

export default OfferSection
