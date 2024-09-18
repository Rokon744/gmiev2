"use client"
import React, { useEffect, useState } from 'react'
import emon from "../../assets/emon.jpg"
import Image from 'next/image'
import axios from 'axios';
import Post from './Post';
import { toast } from 'react-toastify';


const PostLists = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get("/api/post")
        setData(response.data)
    }

    // Delete Post function
    const deletePost = async (id)=>{
        const response = await axios.delete("/api/post/", {
            params:{
                id: id
            }
        })
        if (response.data.success) {
            toast.success("Post Deleted")
            getData()
        } else {
            toast.error("Post Not Deleted")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="header-admin flex justify-between items-center px-10 py-3 border-b">
                <h2>Admin Panel</h2>
                <Image
                    className="w-[50px] h-[50px] rounded-full border object-cover object-top"
                    src={emon}
                    alt="emon"
                />
            </div>
            <div className='border m-10 p-5 h-[600px] overflow-auto'>
                <table className='w-[1000px] text-start'>
                    <thead className='text-left'>
                        <tr>
                            <th>Owner</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return <Post key={item._id} item={item} deletePost={deletePost} />
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PostLists