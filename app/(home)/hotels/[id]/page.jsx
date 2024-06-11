import Gallery from "@/app/componensts/details/Gallery";
import Overview from "@/app/componensts/details/Overview";
import Summary from "@/app/componensts/details/Summary";
import React from "react";

import { getHotelById } from "@/database/queries";

export default async function HotelDetailsPage({params:{id}}) {

  const hotelInfo = await getHotelById(id)
  return (
    <div>
      <Summary hotelInfo={hotelInfo} />
      <Gallery gallery ={hotelInfo?.gallery} />
      <Overview Overview={hotelInfo?.overview} />
    </div>
  );
}
