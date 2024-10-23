import TextWithDot from "@/components/text-with-dot";
import { workImages } from "@/lib/mockdata";
import Image from "next/image";
import React from "react";

const PreviousWorkContainer = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-16">
        <TextWithDot title="PREVIOUS WORKS" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4  bg-black ">
        {workImages?.map((work) => (
          <div key={work.id} className="relative ">
            <Image
              className="w-[30rem] h-[16rem] object-cover"
              src={work?.image}
              quality={100}
              alt="image"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousWorkContainer;
