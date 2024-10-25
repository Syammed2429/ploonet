import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import globeIcon from "@/public/icons/globe-icon.svg";
import { sheetFiltersVariants } from "@/lib/utils/animation-variants";
import {  motion } from "framer-motion";
import { mockData } from "@/lib/mockdata";



export function MobileNavbarSheet() {
  const { navbarItems} = mockData;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black text-white focus:ring-0">
          
        <motion.div
          initial='hidden'
          animate='visible'
          variants={sheetFiltersVariants}
        >
        <ol className="flex items-center flex-col gap-10 mt-8">
            {navbarItems?.map((item) => (
              <motion.div
                className='flex flex-col gap-4'
                variants={sheetFiltersVariants}
                key={item.id}
              >
              <li >{item.title}</li>
            </motion.div>
            ))}
          <Image src={globeIcon} alt="globeIcon" />
        </ol>
      </motion.div>

      </SheetContent>
    </Sheet>
  );
}
