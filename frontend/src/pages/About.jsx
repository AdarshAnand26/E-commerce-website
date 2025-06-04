import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Jerseywala was born out of a passion for sports and a vision to redefine how fans and athletes shop for performance wear. Our journey began with a simple mission: to create a platform where sports enthusiasts can easily find, explore, and purchase premium-quality jerseys, athletic trousers, and footwear — all from the comfort of their homes.</p>
          <p>From the very beginning, we’ve been committed to curating a dynamic collection of sportswear that blends comfort, durability, and style. Whether you're on the field, at the gym, or cheering from the sidelines, Jerseywala offers apparel that matches your energy and supports your goals.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Jerseywala is to empower every customer with confidence, performance, and pride. We are dedicated to delivering a seamless shopping experience that exceeds expectations — from browsing and ordering to doorstep delivery. With trusted quality and trending designs, we’re here to keep you game-ready, always.</p>
        </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className=' text-gray-600'>We source only from trusted, premium sportswear brands to ensure top-tier quality in every product.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className=' text-gray-600'>Enjoy a smooth shopping experience with our easy-to-use platform and fast checkout process.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className=' text-gray-600'>Our support team is always here to help, ensuring your satisfaction with every purchase.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
