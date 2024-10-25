"use client";

import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Play, Video } from "lucide-react";
import Image from "next/image";
import downArrow from "@/public/icons/down-arrow.svg";

export function PloonetFirstCardComponent() {
  const steps = [
    {
      icon: FileText,
      stepName: "STEP1",
      title: "사전 논의",
      description: "스토리보드 전달&수정을 통한 기획안 확정",

      subText: "상담을 통해 방향 설정 및 내용 협의",
    },
    {
      icon: Play,
      stepName: "STEP2",
      title: "영상 기획",
      description: "스토리보드 전달&수정을 통한 기획안 확정",
      subText: "가상인간 발화용 스크립트 작성과 프롬프팅",
    },
    {
      icon: Video,
      stepName: "STEP3",
      title: "영상 생성",
      description: "작성한 스크립트로 가상인간 영상 생성",
      subText: "그외 이미지, 배경 음악 등 필요 요소 생성",
    },
    {
      icon: Video,
      stepName: "STEP4",
      title: "영상 편집",
      description: "영상 전문가의 편집, 디자인, 후반 작업 단계",
      subText: "필요시 실사 촬영 병행하여 편집본 완성",
    },
    {
      icon: Video,
      stepName: "STEP5",
      title: "최종 납품",
      description: "고객 피드백 반영하여 최종본 완성 및 납품",
      subText: "* 영상 수정 무료 1회 제공",
    },
  ];

  return (
    <div className="w-full h-full">
      <Card className="bg-transparent lg:bg-[#141414] text-white border-0 lg:border-2 lg:border-[#ffffff26] p-0">
        <CardHeader className="text-center">
          <CardTitle className="text-xl md:text-5xl">일반 제작</CardTitle>
          <CardDescription className="text-base md:text-lg">제작 시작 후 5영업일 이내</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-0 md:p-10">
          {steps?.map((step, index) => (
            <div className="w-full 2xl:w-[37rem]" key={step.stepName}>
              <div className="flex flex-col items-center">
                <RoundedCards {...step} />
                {index < steps?.length - 1 && (
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
    <div className=" flex flex-col items-center w-full">
      <div className="border rounded-[0.93rem] lg:rounded-[3.25rem] py-6 px-3 md:px-16 bg-black border-[#ffffff26] w-full">
        <div className="flex gap-6 md:gap-16 ">
          <div className="flex flex-col w-auto">
            <span className="text-xs md:text-base text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]">
              {stepName}
            </span>
            <span className="text-nowrap text-base w-full md:text-lg">{title}</span>
          </div>
          <div className="text-left text-xs  md:text-base  w-full text-[#AAAAAA] ">
            <div>{description}</div>
            <div>{subText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
