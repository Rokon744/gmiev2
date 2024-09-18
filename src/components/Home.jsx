import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-no-repeat bg-cover bg-center opacity-90 home-screen">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="md:text-5xl text-[42px] font-bold leading-tight">
          আয়ুর্বেদিক ঔষধ ব্যবহার করে সুস্থ থাকুন | 
        </h1>
        <p className="text-2xl font-bold">
        সম্পূর্ণ ভেষজ উপায় সকল রোগির সুচিকিৎসা দেওয়া হয়         
        </p>
        <p className="text-2xl font-bold">
          যেকোনো পরামর্শ অথবা তথ্য জানতে কল করুন
        </p>
        <p className="text-2xl">01677717777 / 01713825262</p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
