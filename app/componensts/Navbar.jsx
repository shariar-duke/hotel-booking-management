import Image from "next/image";
import Link from "next/link";
import React from "react";
import {auth} from  "../../auth.js"

// atuthe take nia asbo
// auth er data ante chaile eta async function hote hobe tai eta k async function banay felbo

export default async function Navbar({ sideMenu }) {
// session take nia aslm 
  const session = await auth()
// session a jode user tahke tar mane holo session a logged in user ase ..
  return (
    <div className="flex max-w-7xl mx-auto justify-between px-4 py-4 absolute top-0 w-full left-0 right-0 z-50">
      <Link href="/">
        <Image
          src="/stayswift.svg"
          alt='"Stay Swift Logo'
          width={200}
          height={200}
        />
      </Link>

      {sideMenu && (
        <ul className="flex gap-[10px] cursor-pointer text-[16px]">
          <li href="#">Recommended Places</li>
          <li href="#">About Us</li>
          <li href="#">Contact Us</li>
          <Link href="/bookings" className="cursor-pointer text-[16px]">
            Bookings
          </Link>
          <li>

           {
            session?.user ? (<div>
              <span className="mx-1">{session?.user.name}</span> <span>|</span>
            </div>) : (<Link
              href="/login"
              className="bg-primary px-[20px] py-[10px] font-bold rounded-md text-white"
            >
              Login
            </Link>)
           }
            
          </li>
        </ul>
      )}
    </div>
  );
}
