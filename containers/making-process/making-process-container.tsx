import { PloonetFirstCardComponent } from "@/components/ploonet-first-card";
import { PloonetQuickserveCardComponent } from "@/components/ploonet-quickserve-card";
import TextWithDot from "@/components/text-with-dot";
import React from "react";

const MakingProcessContainer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-20">
      <div className="flex justify-center mb-16">
        <TextWithDot title="MAKING PROCESS" />
      </div>
      <div className="relative grid grid-cols-1 xl:grid-cols-2 gap-8 max-h-[51rem]">
        <PloonetFirstCardComponent />
        <PloonetQuickserveCardComponent />
      </div>
      <div className="text-center text-gray-400 py-12">
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
