"use client"
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import logo from "./logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" fixed w-full z-10 text-white">
      <div>
        <div className=" flex flex-row justify-between md:px-32 pr-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link href="/">
              <h1 className=" text-2xl font-semibold">
                <Image src={logo} alt="" />
              </h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              href="#home"
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              প্রথম পাতা
            </Link>
            <Link
              href="#about"
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              আমি
            </Link>
            <Link
              href="#services"
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              সেবাসমূহ
            </Link>
            <Link
              href="#doctors"
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              পণ্যসমূহ
            </Link>
            <a
              href="http://dgdagov.info/index.php/registered-products/ayurvedic"
              target="_blank"
              className=" border px-2 transition-all cursor-pointer"
            >
              ঔষধ প্রশাসন অনুমোদন
            </a>
          </nav>

          <div className=" flex">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            href="home"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            প্রথম পাতা
          </Link>
          <Link
            href="about"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            আমি
          </Link>
          <Link
            href="services"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            সেবাসমূহ
          </Link>
          <Link
            href="doctors"
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            পণ্যসমূহ
          </Link>
          <a
            href="http://dgdagov.info/index.php/registered-products/ayurvedic"
            target="_blank"
            className=" border px-2 transition-all cursor-pointer"
          >
            ঔষধ প্রশাসন অনুমোদন
          </a>

          {/* <div className=" lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
