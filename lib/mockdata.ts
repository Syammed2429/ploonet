import image1 from "@/public/images/01.jpg";
import image2 from "@/public/images/02.jpg";
import image3 from "@/public/images/03.jpg";
import image4 from "@/public/images/04.jpg";
import image5 from "@/public/images/05.jpg";
import image6 from "@/public/images/06.jpg";
import image7 from "@/public/images/07.jpg";
import image8 from "@/public/images/08.jpg";
import image9 from "@/public/images/09.jpg";
import image10 from "@/public/images/10.jpg";
import image11 from "@/public/images/11.jpg";
import image12 from "@/public/images/12.jpg";
import { FileText, Play, Video } from "lucide-react";

export const workImages = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
  {
    id: 6,
    image: image6,
  },
  {
    id: 7,
    image: image7,
  },
  {
    id: 8,
    image: image8,
  },
  {
    id: 9,
    image: image9,
  },
  {
    id: 10,
    image: image10,
  },
  {
    id: 11,
    image: image11,
  },
  {
    id: 12,
    image: image12,
  },
];

export const mockData = {
  navbarItems: [
    {
      id: 1,
      title: "스튜디오",
    },
    {
      id: 2,
      title: "워크센터",
    },
    {
      id: 3,
      title: "손비서",
    },
    {
      id: 4,
      title: "메타휴먼",
    },
    {
      id: 5,
      title: "영상제작소",
    },
    {
      id: 6,
      title: "공지사항",
    },
    {
      id: 7,
      title: "제휴문의",
    },
    {
      id: 8,
      title: "로그인",
    },
  ],
  makingProcessirstCardSteps: [
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
  ],
  makingProcessSecondCardSteps: [
    {
      icon: FileText,
      title: "STEP1",
      description: "제작 안내",
      subtext: "영상 제작 문의를 통해 의뢰 확인 후\n견적 및 진행 순서 안내",
    },
    {
      icon: Play,
      title: "STEP2",
      description: "영상 생성",
      subtext:
        "스크립트 수신 즉시 가상인간 영상 생성\n그외 이미지, 배경 음악 등 필요 요소 생성",
    },
    {
      icon: Video,
      title: "STEP3",
      description: "편집 및 납품",
      subtext: "편집 진행, 12-48시간 내 최종본 완성 및 납품",
    },
  ],
  circles: [
    { name: "FAST", subtext: "X2", leftGap: false, rightGap: true },
    { name: "QUALITY", subtext: "A++", leftGap: true, rightGap: true },
    { name: "LOW PRICE", subtext: "1/2", leftGap: true, rightGap: true },
    { name: "HIGH TECH", subtext: "Gen Ai", leftGap: true, rightGap: false },
  ],
  contactData: [
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
  ],
};
