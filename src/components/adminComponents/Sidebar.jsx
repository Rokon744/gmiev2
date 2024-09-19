import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../logo.png"
import add_icon from "../../assets/add_icon.png"
import blog_icon from "../../assets/blog_icon.png"

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100 w-[320px]'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={logo} width={200} alt='' />
            </div>
            <div className='sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href={"/adminjosimuddin"} className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_black]'>
                        <Image src={add_icon} alt='' width={28} /> <p>Add Post</p>
                    </Link>
                    <Link href={"/adminjosimuddin/postlists"} className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_black]'>
                        <Image src={blog_icon} alt='' width={28} /> <p>Post Lists</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar