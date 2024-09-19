import React from "react";
import PostLists from "@/components/adminComponents/PostLists";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <div>
      <PostLists />
      <ToastContainer />
    </div>
  );
};

export default page;
