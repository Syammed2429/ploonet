import { PloonetFirstCardComponent } from "@/components/ploonet-first-card";
import { PloonetQuickserveCardComponent } from "@/components/ploonet-quickserve-card";
import TextWithDot from "@/components/text-with-dot";
import React from "react";

const MakingProcessContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex justify-center mb-16">
        <TextWithDot title="MAKING PROCESS" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[51rem]">
        <PloonetFirstCardComponent />
        <PloonetQuickserveCardComponent />
      </div>
    </div>
  );
};

export default MakingProcessContainer;
