"use client";

import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import downArrow from "@/public/icons/down-arrow.svg";
import { mockData } from "@/lib/mockdata";
import GradientTextComponent from "../dyanmic-reusable/gradient-text-component";

export function PloonetFirstCardComponent() {
  const { makingProcessirstCardSteps } = mockData;

  return (
    <div className="w-full h-full">
      <Card className="bg-transparent lg:bg-[#141414] text-white border-0 lg:border-2 lg:border-[#ffffff26] p-0">
        <CardHeader className="text-center">
          <CardTitle className="text-xl md:text-5xl">일반 제작</CardTitle>
          <CardDescription className="text-base md:text-lg">
            제작 시작 후 5영업일 이내
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-0 md:p-4">
          {makingProcessirstCardSteps?.map((step, index) => (
            <div className="w-full 2xl:w-[37rem]" key={step.stepName}>
              <div className="flex flex-col items-center">
                <RoundedCards {...step} />
                {index < makingProcessirstCardSteps?.length - 1 && (
                  <Image src={downArrow} alt="downArrow" />
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

interface RoundedCardsProps {
  stepName: string;
  title: string;
  description: string;
  subText: string;
}

const RoundedCards: FC<RoundedCardsProps> = ({
  stepName,
  title,
  description,
  subText,
}) => {
  return (
    <div className="border rounded-[0.93rem] lg:rounded-[3.25rem] py-6 px-3 md:px-16 bg-black border-[#ffffff26] w-full">
      <div className="flex items-center justify-between w-auto gap-6 md:gap-16 ">
        <div className="flex flex-col ">
          <GradientTextComponent
            title={stepName}
            className="text-xs md:text-base font-normal"
          />
          <span className="text-nowrap text-base w-full md:text-lg">
            {title}
          </span>
        </div>
        <div className="text-xs md:text-base text-[#AAAAAA] ">
          <div>{description}</div>
          <div>{subText}</div>
        </div>
      </div>
    </div>
  );
};
