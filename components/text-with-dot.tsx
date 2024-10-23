import React, { FC } from "react";

interface TextWithDotProps {
  title: string;
}

const TextWithDot: FC<TextWithDotProps> = ({ title }) => {
  return (
    <div className="inline-flex space-x-2">
      <div className="bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] w-4 h-4 rounded-full" />
      <h2 className=" text-5xl font-bold leading-[4.25rem]">{title}</h2>
    </div>
  );
};

export default TextWithDot;
