"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { mockData } from "@/lib/mockdata";

export function PloonetQuickserveCardComponent() {
  const { makingProcessSecondCardSteps } = mockData;

  return (
    <div className="w-full h-full">
      <Card className="bg-[#1c1c1c] border-0 overflow-hidden relative rounded-2xl py-11">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] rounded-2xl"
          style={{ padding: "2px" }}
        >
          <div className="w-full h-full bg-[#1c1c1c] rounded-[20px]" />
        </div>
        <CardHeader className="relative z-10 text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]">
            Ploonet Quickserve™
          </CardTitle>
          <p className="text-gray-400 md:text-white text-base md:text-lg mt-2">제작 시작 후 12~48시간 이내</p>
        </CardHeader>
        <CardContent className="relative z-10 space-y-6 py-[5.2rem]">
          {makingProcessSecondCardSteps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] p-[1px] flex flex-col items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-xs md:text-sm font-normal">
                    {step.title}
                  </span>
                  <step.icon className="w-6 h-8 md:w-10 md:h-12 text-gray-200" />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-white font-medium text-lg md:text-2xl">
                    {step.description}
                  </p>
                  <p className="text-gray-400 text-sm md:text-sm mt-2">{step.subtext}</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-28 mr-5"></div>
                <div className="flex-1">
                  {index < makingProcessSecondCardSteps.length - 1 && (
                    <Separator className="bg-gray-700 mt-6" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
