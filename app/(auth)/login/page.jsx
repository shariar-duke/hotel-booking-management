import React from "react";
import LoginForm from "@/app/componensts/auth/LoginForm";
import SocialLogin from "@/app/componensts/auth/SocialLogin";

export default function LoginPage() {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <LoginForm />
        <SocialLogin />
      </div>
    </section>
  );
}

