import React from "react";

function Title({title,des}) {
  return (
    <div>
      <div className="flex flex-col gap-4 font-titleFont  mb-4">
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
          {title}
        </h3>
        <h1 className="text-5xl text-gray-300 font-bold capitalise">
        {des}
        </h1>
      </div>
    </div>
  );
}

export default Title;
