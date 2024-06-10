import React from "react";
import ProfileInfo from "@/app/componensts/users/ProfileInfo";
import PastBooking from "@/app/componensts/users/bookings/PastBooking";
import UpcomingBooking from "@/app/componensts/users/bookings/UpcomingBooking";

export default function BookingsPage() {
  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
}
