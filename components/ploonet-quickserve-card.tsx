'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Play, Video } from "lucide-react"
import { Separator } from './ui/separator'

export function PloonetQuickserveCardComponent() {
  const steps = [
    { icon: FileText, title: "STEP1", description: "제작 안내", subtext: "영상 제작 문의를 통해 의뢰 확인 후\n견적 및 진행 순서 안내" },
    { icon: Play, title: "STEP2", description: "영상 생성", subtext: "스크립트 수신 즉시 가상인간 영상 생성\n그외 이미지, 배경 음악 등 필요 요소 생성" },
    { icon: Video, title: "STEP3", description: "편집 및 납품", subtext: "편집 진행, 12-48시간 내 최종본 완성 및 납품" },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card className="bg-[#1c1c1c] border-0 overflow-hidden relative rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] rounded-2xl" style={{ padding: '2px' }}>
          <div className="w-full h-full bg-[#1c1c1c] rounded-[20px]" />
        </div>
        <CardHeader className="relative z-10">
          <CardTitle className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]">
            Ploonet Quickserve™
          </CardTitle>
          <p className="text-gray-400 mt-2">제작 시작 후 12~48시간 이내</p>
        </CardHeader>
        <CardContent className="relative z-10 space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center  ">
              <div className="flex flex-col items-center justify-center w-20 h-20  rounded-2xl bg-gradient-to-br from-[#FF4E83] to-[#FFBB54] p-[1px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <span className='text-white text-sm font-normal'>
                  {step.title}
                  </span>
                  <step.icon className="w-10 h-12 text-gray-200"  />
              </div>
              <div className='flex flex-col  justify-center w-full'>
                <p className="text-white font-medium">{step.description}</p>
                <p className="text-gray-400 text-sm whitespace-pre-line">{step.subtext}</p>
                {index < steps.length - 1 && <Separator className='opacity-40 my-5'/>}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}