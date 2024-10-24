"use client";

import ContactCard from "@/components/contact/contact-card";
import React from "react";
import checkIcon from "@/public/icons/checked.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const data = [
  {
    id: 1,
    title: "영상 유형 선택",
    showArrow: true,
  },
  {
    id: 2,
    title: "연락 받으실 담당자 성함",
  },
  {
    id: 3,
    title: "이메일",
  },
  {
    id: 4,
    title: "휴대폰 번호",
  },
  {
    id: 5,
    title: "의뢰하실 영상내용",
    description: "아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요.",
    options: [
      {
        value: "1",
        label: "고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등",
      },
      { value: "2", label: "영상 장르 : 홍보,프로모션/IR/프레젠테이션 등" },
      {
        value: "3",
        label: "내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.",
      },
    ],
  },
  {
    id: 6,
    title: "참고 영상",
  },
];

const ContactContainer = () => {
  return (
    <div>
      <div className="space-y-6">
        {data?.map((data) => (
          <div key={data?.id}>
            <ContactCard
              header={data?.title}
              description={data?.description}
              showArrow={data?.showArrow}
              options={data?.options}
            />
          </div>
        ))}
        <div className="text-[#FF6D51] text-base font-normal">
          * 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를
          적어주시면 더 정확히 안내해드리겠습니다.
        </div>
        <div className="flex justify-between items-center pt-36 pb-80">
          <div className="flex  items-center gap-3">
            <Image src={checkIcon} alt="checkIcon" />
            <div className="opacity-60 m-0 p-0">
              <span className=" underline">개인정보처리방침 </span>
              <span className="no-underline">에 동의합니다.</span>
            </div>
          </div>
          <Button className="bg-[#FF6D51] hover:bg-[#FF6D21] text-white">
            문의 보내기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
