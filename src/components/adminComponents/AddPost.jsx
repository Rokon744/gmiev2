"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import emon from "../../assets/emon.jpg"
import axios from 'axios'
import { toast } from 'react-toastify'

const AddPost = () => {
    const [data, setData] = useState({
        title: "",
        description: ""
    })

    // Only value handler
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setData(data => ({ ...data, [name]: value }))
    }

    // From Submit And Post Data
    const submitHandler = async (e) => {
        e.preventDefault()

        const fromData = new FormData()
        fromData.append("title", data.title)
        fromData.append("description", data.description)

        const response = await axios.post("/api/post", fromData)
        
        if (response.data.success) {
            toast.success("Post Added")
            setData({
                title: "",
                description: ""
            })
        } else {
            toast.error("somthing is wrong")
        }
    }

    return (
        <>
            <div className="header-admin flex justify-between items-center px-10 py-3 border-b">
                <h2>Admin Panel</h2>
                <Image className='w-[50px] h-[50px] rounded-full border object-cover object-top' src={emon} alt='emon' />
            </div>
            <form action="#" method='post' className='px-10 py-10' onSubmit={submitHandler}>
                <label htmlFor="title">
                    <h4 className='text-xl'>Post Title</h4>
                </label>
                <input className='w-full sm:w-[500px] mt-4 px-4 py-3 border mb-10' id='title' name='title' type="text" onChange={onChangeHandler} value={data.title} required placeholder='Title Here' />

                <label htmlFor="description">
                    <h4 className='text-xl'>Post Description</h4>
                </label>
                <textarea className='w-full sm:w-[500px] mt-4 px-4 py-3 border' rows={6} id='description' name='description' type="text" onChange={onChangeHandler} value={data.description} required placeholder='Description Here' />

                <br />
                <button className='mt-8 w-40 h-12 bg-black text-white hover:bg-gray-600 transition-all ease-in-out duration-300' type='submit'>POST</button>
            </form>
        </>
    )
}

export default AddPost