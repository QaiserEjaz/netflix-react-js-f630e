import React from 'react'
import SavedShows from '../components/SavedShows'

export const Account = () => {
  return (
    <>
      <div className='w-full  text-white'>
        <img
         className=' w-full h-[440px] object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/d21c8522-fa1d-4184-a652-a62c6e3b6916/PK-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div classname='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'> My Shows on </h1>
        </div>

      </div>

      <SavedShows />
    </>
  )
}

