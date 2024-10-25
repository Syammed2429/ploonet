"use client";

import ContactCard from "@/components/contact/contact-card";
import React from "react";
import checkIcon from "@/public/icons/checked.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { mockData } from "@/lib/mockdata";
import GradientTextComponent from "@/components/dyanmic-reusable/gradient-text-component";

const { contactData } = mockData;

const ContactContainer = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <GradientTextComponent title="영상 제작 문의" />
        <div className="flex flex-col md:flex-row items-center justify-center  text-2xl lg:text-[2.75rem] font-bold">
          <p>영상 제작이 필요하다면,</p>
          <p className="font-light">지금 문의 주세요.</p>
        </div>
        <div className="text-center text-base font-normal lg:text-2xl md:font-bold opacity-60">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시
          연락 드리겠습니다.
        </div>
        <div className="text-base md:text-lg font-normal text-[#666666]">
          <p className="block md:hidden text-base font-bold">E-MAIL</p>
          <span className="text-white md:text-inherit">
            henry.lim@saltlux.com
          </span>
        </div>
      </div>
      {contactData?.map((data) => (
        <div key={data?.id}>
          <ContactCard
            header={data?.title}
            description={data?.description}
            showArrow={data?.showArrow}
            options={data?.options}
          />
        </div>
      ))}
      <div className="flex items-start gap-0.5 text-[#FF6D51] text-xs md:text-base font-normal mt-14 md:mt-2">
        <p>*</p>
        참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면
        더 정확히 안내해드리겠습니다.
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center pt-36 pb-16 md:pb-80 space-y-16 md:space-y-0">
        <div className="flex items-center gap-3">
          <Image src={checkIcon} alt="checkIcon" />
          <div className="opacity-60 m-0 p-0 text-sm md:text-xl ">
            <span className=" underline">개인정보처리방침 </span>
            <span className="no-underline">에 동의합니다.</span>
          </div>
        </div>
        <Button className="bg-[#FF6D51] hover:bg-[#FF6D21] text-white p-[1rem_1.75rem]">
          문의 보내기
        </Button>
      </div>
    </div>
  );
};

export default ContactContainer;
