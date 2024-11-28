'use client'
import { useState }  from "react";
import Image from "next/image";
import styles from '../styles/style.module.css'
import About from "../components/aboutSection";
import Navbar from "../navbar/page";

type Slide=
{
imageUrl:string,
title:string,
description:string
}

type CarouselProps = {
  slides: Slide[];
};

export default function Carousel({ slides }: CarouselProps) {

const [currentIndex,setCurrentIndex]=useState<number>(0);

const prevSlide = () : void =>{
setCurrentIndex(
  (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
);
}

const nextSlide = () : void =>{
  setCurrentIndex(
    (nextIndex) => (nextIndex + 1) % slides.length
  );
  }

  return (
    <>
    <Navbar />
    <section className="-z-20 w-full bg-white grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3">
  {/* Left Section: Image */}
  <div className="relative col-span-2">
    <Image
      src={slides[currentIndex].imageUrl}
      alt={slides[currentIndex].title}
      width={1920}
      height={1080}
      className="w-full h-auto object-cover"
    />
    <div className="absolute right-0 sm:hidden bottom-0 flex flex-row space-x-5 p-3 bg-black">
      <img
        className="opacity-35 hover:opacity-100 hover:cursor-pointer"
        src="/images/icon-angle-left.svg"
        alt="angle-left"
        onClick={prevSlide}
      />
      <img
        className="opacity-35 hover:opacity-100 hover:cursor-pointer"
        src="/images/icon-angle-right.svg"
        alt="angle-right"
        onClick={nextSlide}
      />
    </div>
  </div>

  {/* Right Section: Text and Toggles */}
  <div className="relative flex flex-col justify-center items-start px-6 md:px-10 py-8">
    <h3
      className={`text-3xl md:text-6xl font-bold text-black mb-6 ${styles.font}`}
    >
      {slides[currentIndex].title}
    </h3>
    <p
      className={`text-base md:text-lg text-gray-500 mb-8 ${styles.font}`}
    >
      {slides[currentIndex].description}
    </p>
    
    <a
  className={`inline-flex items-center text-black font-bold hover:underline ${styles.font} 
    md:self-center lg:justify-start md:justify-center md:w-full`} // Center on medium screens
  href="#"
>
  SHOP NOW <img className="ml-2" src="/images/icon-arrow.svg" alt="Shop Now" />
</a>

    
    <div className="hidden sm:absolute sm:bottom-0 sm:left-0 sm:flex flex-row space-x-10 p-6 bg-black">
      <img
        className="opacity-35 hover:opacity-100 hover:cursor-pointer"
        src="/images/icon-angle-left.svg"
        alt="angle-left"
        onClick={prevSlide}
      />
      <img
        className="opacity-35 hover:opacity-100 hover:cursor-pointer"
        src="/images/icon-angle-right.svg"
        alt="angle-right"
        onClick={nextSlide}
      />
    </div>
  </div>
</section>


<About />
    </>

  );


}