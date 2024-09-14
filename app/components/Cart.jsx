"use client";
import React, { Fragment } from "react";
import { useAppSelector } from "../lib/hook";
import { convertToText } from "../utils/convertion";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  return (
    <div className="flex flex-col gap-4 w-full  md:w-1/3 lg:w-1/5 ">
      <button className="block w-full bg-gray-300 text-white py-2 px-4 rounded">
        Buy
      </button>

      {Object.entries(cart).map(([key, value], index) => (
        <Fragment key={key}>
          <div className="flex justify-between ">
            <p className="capitalize font-semibold">{convertToText(key)}</p>
            <p className="capitalize font-semibold">
              {key === "mca" ? (value === true ? "On" : "Off") : value}
            </p>
          </div>
          {index + 1 != Object.entries(cart).length && (
            <div className="border-t border-slate-200 border-solid "></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
