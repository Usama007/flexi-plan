"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/hook";
import { select } from "@/app/lib/slices/cartSlice";
import { convertToGB } from "@/app/utils/convertion";
import React, { useState } from "react";
import eligibilty from "./../../data/eligibility-map.json";
import { getBgColor } from "@/app/utils/color";

export default function RoundButton({ planName, item }) {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  let index = eligibilty[`day_${cart.longevity}`][planName]?.findIndex(
    (i) => i === item
  );
  let disabled = false;

  if (index <= -1) {
    disabled = true;
    if (cart[planName] === item) {
      dispatch(select({ planName, value: 0 }));
    }
  }

  return (
    <button
      disabled={disabled}
      className={`border-solid border-2 rounded-full w-12 h-12 md:h-16 md:w-16 lg:w-15 lg:h-15 mb-2 shadow-md text-[10px] md:text-[11px]   ${
        disabled
          ? "bg-gray-100 text-gray-600 cursor-not-allowed"
          : cart[planName] === item
            ? getBgColor(planName)
            : "bg-inherit"
      }`}
      onClick={() => {
        dispatch(select({ planName, value: item }));
      }}
    >
      {planName === "longevity" || planName === "voice" || planName === "sms"
        ? item
        : convertToGB(item)}
    </button>
  );
}
