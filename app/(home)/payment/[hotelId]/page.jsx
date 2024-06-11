import PaymentForm from "@/app/componensts/payment/PaymentForm";
import React from "react";
import {redirect} from "next/navigation"; 
import { auth } from "../../../../auth"

export default async function PyamentPage() {

    // ekhne session ta pete pare...
    const session = await auth();

    // jode session na pai tahle redirect kore dbo holo login page  a 
    if (!session) {
        redirect("/login");
    }
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>Effotel By Sayaji Jaipur</b> and base price is{" "}
          <b>$10</b>
        </p>
        <PaymentForm />
      </div>
    </section>
  );
}
