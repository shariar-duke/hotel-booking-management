import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-[60px] py-[10px]'>
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
        <Link href="/login" class="login" className='bg-orange-500 px-[14px] py-[6px] text-[14px] rounded-sm text-white font-bold'>Login</Link>
      </li>
      </ul>
    </nav>
  )
}
