import React from 'react'
import HotelSummaryInfo from './HotelSummaryInfo'
import Image from 'next/image'

export default function HotelCard({hotelInfo}) {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
     
     <Image src={hotelInfo?.thumbNailUrl} alt="hotel image" width={240} height={160} />
      <HotelSummaryInfo fromListPage={true} info ={hotelInfo} />
    </div>
  )
}
