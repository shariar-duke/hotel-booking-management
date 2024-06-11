"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function RegistrationForm() {
  const [error, setError] = useState();
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const fname = formData.get("fname");
      const lname = formData.get("lname");
      const email = formData.get("email");
      const password = formData.get("password");
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ fname, lname, email, password }),
      });
      response.status === 201 && router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
    {
      <div className="text-xl text-red-500 text-center">
        {error && error}
      </div>
    }
      <form className="flex flex-col my-6" onSubmit={onSubmit}>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="fname">First Name</label>
          <input
            className="border border-black/20 rounded-md py-2 px-4"
            type="text"
            name="fname"
            id="fname"
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <label htmlFor="fname">Last Name</label>
          <input
            className="border border-black/20 rounded-md py-2 px-4"
            type="text"
            name="lname"
            id="lname"
          />
        </div>
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
          {" "}
          Create Account
        </button>
      </form>
    </>
  );
}
