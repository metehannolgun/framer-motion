import React from 'react'
import HeroImage from '../../assets/hero.png'

const Hero = () => {
  return (
    <section>
      <div className="bg-amber-50 rounded-3xl container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/* Text Section */}
        <div className='flex flex-col justify-center xl:pr-40'>
          <div className='mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left md:pl-8'>
            <h1 className='text-5xl font-bold text-blue-900'>COVID-19 Risk <br/> Assessment Tool</h1>
            <p className='text-lg text-gray-400 mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam, quisquam temporibus saepe deleniti expedita officia delectus ratione repellat. Ducimus cupiditate recusandae dignissimos aliquid nemo!
            </p>
            <div className='text-center md:text-left'>
              <div className='bg-pink-500 text-white px-6 py-4 rounded-lg mt-4 w-fit font-bold hover:shadow-lg transform duration-300 mx-auto md:mx-0'>
                <button>See how to use it</button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex items-center justify-center'>
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero