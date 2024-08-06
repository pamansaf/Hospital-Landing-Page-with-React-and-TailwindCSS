import React from "react";

const BlogCard = ({ img, headlines }) => {
  return (
    <div className="w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
      <img
        src={img}
        alt="img"
        className="h-52 md:h-96 lg:h-40 w-full rounded-lg"
      />
      <h2 className="text-lg font-semibold">{headlines}</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illum
        quaerat similique, ipsa deserunt...
      </p>
    </div>
  );
};

export default BlogCard;
