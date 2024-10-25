import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface GradientTextComponentProps {
  title: string;
  className?: string;
}
const GradientTextComponent: FC<GradientTextComponentProps> = ({
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-clip-text text-xl md:text-2xl leading-9 text-transparent bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]",
        className
      )}
    >
      {title}
    </div>
  );
};

export default GradientTextComponent;
