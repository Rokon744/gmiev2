import Navbar from "@/components/Navbar";
import PostAll from "@/components/PostAll";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../components/logo.png";

const page = () => {
  return (
    <>
      <Link
        href={"/"}
        className="text-center"
      >
        <h2 className="text-2xl font-bold p-5 bg-brightColor hover:bg-hoverColor transition-all ease-in-out duration-300 text-white">Back to Home</h2>
      </Link>
      <PostAll />
    </>
  );
};

export default page;
