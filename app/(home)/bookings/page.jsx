import React from "react";
import ProfileInfo from "@/app/componensts/users/ProfileInfo";
import PastBooking from "@/app/componensts/users/bookings/PastBooking";
import UpcomingBooking from "@/app/componensts/users/bookings/UpcomingBooking";
import {redirect} from "next/navigation"; // notice this redirect syntax 

import { auth } from "../../../auth";
// auth k import kore niye asbo ..
export default async function BookingsPage() {
  // ekhne session ta pete pare...
  const session = await auth();

  // jode session na pai tahle redirect kore dbo holo login page  a 
  if (!session) {
      redirect("/login");
  }

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
