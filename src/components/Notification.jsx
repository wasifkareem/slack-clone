import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'

const Notification = () => {
    const [isClosed, setIsClosed] = useState(false)
  return (
    <>
    {!isClosed && <div className='bg-[#0164A0] text-white p-4  md:p-7 px-6 md:px-8 my-5 rounded-full flex items-center justify-between'>
       <div>
       <p className=' flex text-sm md:text-base '>Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world. <span className=' hidden lg:flex items-center font-semibold underline underline-offset-2 gap-2'>Let's go <GoArrowRight className=' hidden lg:flex font-semibold' /></span>
       </p>
       </div>
       <div className=' flex items-center'>
        <button onClick={()=>setIsClosed(true)} className='cursor-pointer text-2xl'>  <IoMdClose />

        </button>
       </div>
    </div>}
    </>
  )
}

export default Notification