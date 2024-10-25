import React, { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import chevronDown from "@/public/icons/chevron-down.svg";
import Image from "next/image";
interface Options {
  value: string;
  label: string;
}
interface ContactCardProps {
  header: string;
  description?: string;
  showArrow?: boolean;
  options?: Options[];
}

const ContactCard: FC<ContactCardProps> = ({
  header,
  description,
  showArrow,
  options,
}) => {
  return (
    <div>
      <Card className="px-10 bg-[#141414]  py-5  border border-[#ffffff26]">
        <CardHeader className="p-0 space-y-0 text-base md:text-lg">
          <CardTitle className="flex items-center justify-between text-base md:text-lg text-white  font-bold">
            <div className="opacity-60">{header}</div>
            {showArrow && <Image src={chevronDown} alt="chvronDown" />}
          </CardTitle>
          <CardDescription className="text-white opacity-60 text-base md:text-lg">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {options?.length && (
            <div className="pb-7 md:pb-16 mt-6 text-white opacity-60 text-base md:text-lg">
              {options?.map((option: Options) => (
                <div key={option?.value} className="">
                  <span>{option?.label}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCard;
