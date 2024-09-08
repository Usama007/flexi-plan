"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/hook";
import { select } from "@/app/lib/slices/cartSlice";
import React from "react";
import Switch from "react-switch";

export default function ToggleBtn({ planName }) {
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  return (
    <Switch
      checked={cart?.mca ? true : false}
      onChange={() => {
        dispatch(select({ planName, value: !cart?.mca }));
      }}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={20}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      height={14}
      width={35}
      className="react-switch"
      id="material-switch"
    />
  );
}
