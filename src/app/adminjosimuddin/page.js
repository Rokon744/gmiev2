import AddPost from '@/components/adminComponents/AddPost'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
  return (
    <div >
        <AddPost />
        <ToastContainer />
    </div>
  )
}

export default page