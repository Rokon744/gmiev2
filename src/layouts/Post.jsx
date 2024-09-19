import React from 'react'
import emon from "../assets/emon.jpg"
import Image from 'next/image'

const Post = ({ data }) => {
    const date = new Date(data.date)
    return (
        <article>
            <div className='border p-5 shadow-[0_5px_12px_rgba(0,0,0,0.18)] hover:scale-[1.05] transition-all duration-150 ease-in-out'>
                <h2 className='text-2xl mb-4'><strong>{data.title}</strong></h2>
                <p className='text-[#555]'>{data.description}</p>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-400">
                        {date.toDateString()}
                    </p>
                    <div className=''>
                        <Image className='w-[50px] h-[50px] rounded-full object-top object-cover' src={emon} alt="" />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post