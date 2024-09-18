import React from "react";

const BlogCard = ({ title, details }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p>
        {details}
      </p>
    </div>
  );
};

export default BlogCard;
