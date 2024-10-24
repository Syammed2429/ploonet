import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import globeIcon from "@/public/icons/globe-icon.svg";

export function MobileNavbarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black text-white focus:ring-0">
        <ol className="flex items-center flex-col gap-10 mt-8">
          <li>스튜디오</li>
          <li>워크센터</li>
          <li>손비서</li>
          <li>메타휴먼</li>
          <li>영상제작소</li>
          <li>공지사항</li>
          <li>제휴문의</li>
          <div>로그인</div>
          <Image src={globeIcon} alt="globeIcon" />
        </ol>
      </SheetContent>
    </Sheet>
  );
}
