import React from "react";
import bubbleMapData from "./../../data/bubble-map.json";
import FlexiItems from "./flexiItems";

export default function Flexiplan() {
  const topPriorityKey = "longevity";
  const bottomPriorityKey = "mca";

  const {
    [topPriorityKey]: topPriorityValue,
    [bottomPriorityKey]: bottomPriorityValue,
    ...middleKeys
  } = bubbleMapData;

  const sortedObject = {
    [topPriorityKey]: topPriorityValue,
    ...middleKeys,
    [bottomPriorityKey]: bottomPriorityValue,
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3 ">
      <p className="text-4xl font-thin">Flexiplan</p>
      <p className="text-lg   ">
        Make your own plan and enjoy great savings! Only for GP Customers
      </p>
      {Object.entries(sortedObject).map(([key, value]) => (
        <FlexiItems key={key} planName={key} options={value} />
      ))}
    </div>
  );
}
