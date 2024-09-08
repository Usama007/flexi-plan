"use client";

import { useAppSelector } from "@/app/lib/hook";
import { getTextColor } from "@/app/utils/color";
import {
  convertInfo,
  convertToGB,
  convertToText,
} from "@/app/utils/convertion";

export default function PlanInfo({ planName }) {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div>
      <p className="capitalize text-base md:text-2xl font-medium">
        {convertToText(planName)}
      </p>
      {planName === "mca" ? (
         <p
         className={"capitalize text-gray-400 text-sm md:text-base font-medium"}
       >
        Validity: 30 days
       </p>
      ):(
         <p
         className={`capitalize text-base md:text-xl font-normal ${getTextColor(planName)}`}
       >
         {planName === "longevity" || planName === "voice" || planName === "sms"
           ? cart?.[planName] + " " + convertInfo(planName)
           : convertToGB(cart?.[planName])}
       </p>
      )}
     
      {planName === "fourg" && (
        <p className="capitalize text-gray-400 text-sm md:text-base font-medium">
          4G enabled handset + SIM required
        </p>
      )}
    </div>
  );
}
