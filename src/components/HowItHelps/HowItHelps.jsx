import React from 'react'
import Card from './CardComp.jsx'
import Icon1 from '../../assets/icon/1.png'
import Icon2 from '../../assets/icon/2.png'
import Icon3 from '../../assets/icon/3.png'

const HowItHelps = () => {
  return (
    <section className='mt-5'>
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                        <Card icon={Icon1} 
                                heading="Symptoms"
                                text="Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Ullam, iusto." />
                        <Card icon={Icon2} 
                                heading="Recommendations"
                                text="Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Ullam, iusto." />
                        <Card icon={Icon3} 
                                heading="Local information"
                                text="Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ullam, iusto." />
          
                    </div>

                </div>
                <div className='flex flex-col justify-center xl:pr-14'  >
                    <h1 className='text-3xl font-bold text-blue-950'>
                        How it Helps people
                    </h1>
                    <p className=' text-gray-400 mt-4'>
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Aliquam, quis esse illo eum 
                        reiciendis suscipit?
                    </p>
                    <p className='text-sm text-gray-400 mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <a href='#' className='text-pink-400'>Learn More</a>
                    </p>
                    <button className='w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-red-400 
                    hover:text-white transform duration-300'>
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItHelps