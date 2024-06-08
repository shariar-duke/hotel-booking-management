/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Search() {
  return (
    <div className="lg:max-h-[250px] mt-6">
    <div className="bg-white w-full h-full py-10 lg:py-12 px-6 lg:px-8 rounded-xl border border-black/10 shadow-lg lg:flex items-center [&>*]:flex-1 [&>*]:px-2 [&>div>span]:mb-3 space-y-5 lg:space-y-0">
  
      <div>
        <span>Destination</span>
        <h4 className="mt-2">
          <select name="destination" id="destination">
            <option value="Bali">Bali</option>
            <option value="Bali">Cox's Bazar</option>
            <option value="Bali">Sylhet</option>
            <option value="Bali">Saint Martin</option>
            <option value="Bali">Bali</option>
          </select>
        </h4>

      </div>

   

      <div>
        <span>Check in</span>
        <h4 className="mt-2">
          <input type="date" name="checkin" id="checkin"/>
        </h4>

      </div>

      <div>
        <span>Checkout</span>
        <h4 className="mt-2">
          <input type="date" name="checkout" id="checkout"/>
        </h4>
      </div>
    </div>
  </div>
  )
}
