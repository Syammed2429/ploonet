import React from "react";
import { PloonetFirstCardComponent } from "@/components/making-progress/ploonet-first-card";
import { PloonetQuickserveCardComponent } from "@/components/making-progress/ploonet-quickserve-card";
import TextWithDot from "@/components/dyanmic-reusable/text-with-dot";
const MakingProcessContainer = () => {
  return (
    <div className="mt-6 md:mt-20  md:space-y-10 ">
      <div className="text-center">
        <TextWithDot title="MAKING PROCESS" />
      </div>
      <div className="flex flex-col xl:flex-row gap-6 xl:flex-grow h-full justify-center items-center xl:items-stretch ">
        <PloonetFirstCardComponent />
        <PloonetQuickserveCardComponent />
      </div>

      <div className="text-center text-[0.62rem] md:text-sm text-gray-400 py-7">
        <p>
          * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등
          전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p>
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
          있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default MakingProcessContainer;
