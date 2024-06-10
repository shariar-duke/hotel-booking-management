import Gallery from "@/app/componensts/details/Gallery";
import Overview from "@/app/componensts/details/Overview";
import Summary from "@/app/componensts/details/Summary";
import React from "react";

export default function HotelDetailsPage() {
  return (
    <div>
      <Summary />
      <Gallery />
      <Overview />
    </div>
  );
}
