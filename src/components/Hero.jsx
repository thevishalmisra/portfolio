import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Vishal Raman
        </span>
        ,Web Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        Bringing designs to life through responsive and contemporary web development is my specialty.
      </p>
      <div className='mt-8 space-x-4'>
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/vishal-raman-80b60525b"
          target="_blank"
          rel="noopener noreferrer"
          className='inline-block bg-blue-600 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          LinkedIn
        </a>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1SEDVDu3TJTM2m8IZ75hqV_LHLxovcCzb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className='inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Resume
        </a>
      </div>
    </div>
  )
}

export default Hero



