import FeatureCircles from "@/components/circles/circles";
import GradientTextComponent from "@/components/dyanmic-reusable/gradient-text-component";
import React from "react";

const CirclesContainer = () => {
  return (
    <div className="max-w-[120rem] flex flex-col items-center text-center p-4">
      <GradientTextComponent
        title="영상 제작소"
        className="text-2xl font-bold mb-8 "
      />
      <div className="flex items-center font-normal z-10  text-gray-400 text-base lg:text-[2.75rem]">
        <span>당장 내일</span>
        <span className="font-bold text-white">‘고품질 맞춤 영상’</span>
        <span>을 받아보세요.</span>
      </div>
      <div className="md:py-6 ">
        <FeatureCircles />
      </div>
      <h3 className="text-lg md:text-4xl font-bold leading-[2.8rem]  md:py-6">
        AI VIDEO ON YOUR DEMAND
      </h3>
      <div className="flex flex-col gap-14 w-full max-w-[55rem] opacity-60 text-base md:text-lg">
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
