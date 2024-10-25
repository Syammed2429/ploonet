import FeatureCircles from "@/components/circles";
import React from "react";

const CirclesContainer = () => {
  return (
    <div className="max-w-[120rem] flex flex-col items-center text-center p-4">
      <span className="bg-clip-text text-2xl leading-9 font-bold text-transparent bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]">
        영상 제작소
      </span>
      <div className="flex items-center font-normal text-gray-400 text-[2.75rem]">
        <span>당장 내일</span>
        <span className="font-bold text-white">‘고품질 맞춤 영상’</span>
        <span>을 받아보세요.</span>
      </div>
      <div>
        <FeatureCircles />
      </div>
      <h3 className="text-4xl font-bold leading-[2.8rem] py-6">
        AI VIDEO ON YOUR DEMAND
      </h3>
      <div className="flex flex-col gap-14 w-full max-w-[55rem] opacity-60">
        <div>
          <p>
            가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI
            기술에
          </p>
          <p>
            영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된
            영상을 만듭니다.
          </p>
        </div>
        <div>
          <p>가격은 절반으로, 속도는 두배로, 품질은 A++!</p>
          <p>기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등</p>
          <p>
            당신이 필요한 &apos;그 영상&apos; 을 플루닛 영상제작소에 맡겨주세요.
          </p>
        </div>
        <div
          className="bg-white h-[0.15rem] opacity-40"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 53.75%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default CirclesContainer;
