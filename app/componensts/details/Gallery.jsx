import React from 'react'
import Image from 'next/image'       
export default function Gallery() {
  return (
    <section className="container">
    <div className="grid grid-cols-2 imageshowCase">
    <div className='h-[400px] border border-black/40'></div>
 
      <div className='grid grid-cols-2 grid-rows-2 h-[400px] border'>
        <div className='border border-black/40'>1</div>
        <div  className='border border-black/40'>2</div>
        <div  className='border border-black/40'>3</div>
        <div  className='border border-black/40'>4</div>
      </div>
    
    </div>
  </section>
  )
}
