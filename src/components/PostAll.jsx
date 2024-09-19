"use client"
import Post from '@/layouts/Post'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostAll = () => {
  const [posts, setPosts] = useState([])

  const getData = async () => {
    const response = await axios.get("/api/post")
    setPosts(response.data.reverse())
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='text-center text-xl md:text-4xl pt-6 md:pt-20 pb-5 md:pb-10 px-10'>
        <h1><strong>এখানে আমাদের নতুন ও পুরাতন সকল ধরনের আপডেট পোস্টগুলো পেয়ে যাবেন</strong></h1>
      </div>
      <div className="posts-inner grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-10 px-5 md:px-10">
        {posts.map((data, ind) => {
          return <Post key={ind} data={data} />
        })}
      </div>
    </>
  )
}

export default PostAll