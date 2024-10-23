import Image from "next/image";
import React from "react";
import icon from "@/public/icons/ploonet-icon.svg";
import globeIcon from "@/public/icons/globe-icon.svg";
const NavbarComponent = () => {
  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-sm z-50 ">
      <div className="flex items-center justify-around py-7">
        <Image src={icon} alt="icon" />
        <ol className="flex items-center gap-20">
          <li>스튜디오</li>
          <li>워크센터</li>
          <li>손비서</li>
          <li>메타휴먼</li>
          <li>영상제작소</li>
          <li>공지사항</li>
          <li>제휴문의</li>
        </ol>
        <div className="flex items-center gap-14">
          <div>로그인</div>
          <Image src={globeIcon} alt="globeIcon" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
