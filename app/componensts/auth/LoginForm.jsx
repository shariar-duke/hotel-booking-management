"use client";
import React from "react";
import { login } from "@/app/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState();
  const router = useRouter();
  async function onSubmit(e) {
    e.preventDefault();

    try {
      // event theke data tulte hbe ..

      const formData = new FormData(e.currentTarget);
      // ekhn formdata k login a pass kore dite parbo
      const response = await login(formData);
      if (response.error) {
        setError(response.error.message);
      } else {
        router.push("/bookings");
      }
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      {error && <div className="text-red-500 text-xl text-center">{error}</div>}
      <form className="flex flex-col my-6" onSubmit={onSubmit}>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="email">Email Address</label>
          <input
            className="border border-black/20 rounded-md py-2 px-4"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="password">Password</label>
          <input
            className="border border-black/20 rounded-md py-2 px-4"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
}
