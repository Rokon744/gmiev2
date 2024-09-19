import React from "react";
import img from "../assets/emon.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
        আমার সম্পর্কে
        </h1>
        <p className=" text-justify lg:text-start">
          হ্যালো! আমি মো: জসিম উদ্দিন, একজন নিবেদিত ইউনানী ডাক্তার এবং সামগ্রিক
          স্বাস্থ্য এবং সুস্থতার জন্য একটি আবেগের সাথে অভিজ্ঞ বিক্রয়কর্মী।
          ইউনানী ঔষধের ক্ষেত্রে আমার যাত্রা শুরু হয়েছিল প্রাকৃতিক নিরাময়ের
          শক্তি এবং ঐতিহ্যগত অনুশীলনের গভীর-মূল বিশ্বাসের সাথে। বছরের পর বছর
          ধরে, আমি যুগোপযোগী ইউনানী নীতিগুলি ব্যবহার করে বিভিন্ন রোগ নির্ণয় এবং
          চিকিত্সার ক্ষেত্রে আমার দক্ষতাকে সম্মানিত করেছি, আধুনিক স্বাস্থ্যসেবা
          পদ্ধতির সাথে প্রাচীন জ্ঞানকে মিশ্রিত করেছি।
        </p>
        <p className="text-justify lg:text-start">
          আমার চিকিৎসা অনুশীলনের পাশাপাশি, আমি বিক্রয়ের জগতে একটি অনন্য
          দৃষ্টিভঙ্গি নিয়ে এসেছি। আমার অভিজ্ঞতা আমাকে সহানুভূতি এবং দক্ষতার
          সাথে রোগিদের চাহিদা বোঝার এবং সমাধান করার গুরুত্ব শিখিয়েছে। আমি
          এমন পণ্য এবং পরিষেবাগুলি অফার করতে গর্বিত যা সত্যিকার অর্থে একটি
          পার্থক্য তৈরি করে, তা ব্যক্তিগতকৃত পরামর্শের মাধ্যমে হোক বা
          উচ্চ-মানের, কার্যকর প্রতিকার প্রদান করা হোক।
        </p>
        <p className="text-justify lg:text-start">
          আমার দ্বৈত দক্ষতা আমাকে একটি সামগ্রিক মানসিকতার সাথে প্রতিটি
          ইন্টারঅ্যাকশনের সাথে যোগাযোগ করতে দেয়, আমি যে প্রতিটি সমাধান প্রস্তাব
          করি তা আমার রোগিদের মঙ্গলের সাথে সারিবদ্ধ হয় তা নিশ্চিত করে। আমি আমার
          চিকিৎসা অনুশীলন এবং আমার বিক্রয় প্রচেষ্টা উভয়ের মাধ্যমেই স্বাস্থ্য
          এবং সুখ বৃদ্ধি করতে প্রতিশ্রুতিবদ্ধ।
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <Image className=" rounded-lg object-cover w-full md:h-[900px]" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
