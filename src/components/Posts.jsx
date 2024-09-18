"use client"

import React, { useEffect, useState } from 'react'
import Post from '../layouts/Post'
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = useState([])

  const getData = async()=>{
    const response = await axios.get('/api/post')
    setPosts(response.data)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <section className='flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16'>
      <div className="posts-container">
        <div className="posts-header">
          <h1 className='text-4xl font-semibold text-center lg:text-start'>
            নতুন আপডেট পোস্ট _____
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            এখানে সকল নতুন ঔষধ এবং সকল ধরনের সমস্যা ও সমাধান নিয়ে পোস্ট করা হবে <br />
            <span className="text-[#418a4b] bold">জেনে নিন কোন ওষুধের কার্যকারিতা কি</span>
          </p>
        </div>
        <div className="posts-inner grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-10">
          {posts.map((data, ind) => {
            return <Post key={ind} data={data} />
          })}
        </div>
      </div>

    </section>
  )
}

export default Posts