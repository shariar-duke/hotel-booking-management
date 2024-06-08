import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex max-w-7xl mx-auto justify-between px-4 py-4 absolute top-0 w-full left-0 right-0 z-50">
      <Link href="/">
        <Image src="/stayswift.svg" 
        alt='"Stay Swift Logo'
        width={200}
        height={200}
        />
      </Link>
      <ul className='flex gap-[10px] cursor-pointer text-[16px]'>
        <li href="#">Recommended Places</li>
        <li href="#">About Us</li>
        <li href="#">Contact Us</li>
        <li href="/bookings">Bookings</li>
        <li>
        <Link href="/login" className="bg-primary px-[20px] py-[10px] font-bold rounded-md text-white">Login</Link>
      </li>
      </ul>
    </div>
  )
}
