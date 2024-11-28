"use client";

import React from 'react';
import styles from '../styles/style.module.css'


export default function about() {
    
    return (
        <>

<section className="grid grid-cols-1 sm:grid-cols-4 bg-white">
  {/* Left Image */}
  <div className="w-full h-auto">
    <img 
      className="w-full h-full object-cover" 
      src="/images/image-about-dark.jpg"  
      alt="table-dark" 
    />
  </div>

  {/* Center Content */}
  <div className="flex flex-col justify-center items-start p-16 sm:text-left col-span-2">
    <h3 
      className={`text-3xl text-black font-semibold mb-4 ${styles.font}`}
    >
      About Our Furniture
    </h3>
    <p 
      className={`text-gray-400 leading-relaxed ${styles.font}`}
    >
      Our multifunctional collection blends design and function to suit your individual taste.
      Make each room unique, or pick a cohesive theme that best expresses your interests and what
      inspires you. Find the furniture pieces you need, from traditional to contemporary styles
      or anything in between. Product specialists are available to help you create your dream space.
    </p>
  </div>

  {/* Right Image */}
  <div className="w-full h-auto">
    <img 
      className="w-full h-full object-cover" 
      src="/images/image-about-light.jpg"  
      alt="chair-light" 
    />
  </div>
</section>


        </>
    );
}