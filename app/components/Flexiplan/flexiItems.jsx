import RoundButton from "./roundButton";
import { Fragment } from "react";
import ToggleBtn from "./toggleBtn";
import PlanInfo from "./planInfo";

export default function FlexiItems(props) {
  const { planName, options } = props;

  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className={`${planName === "mca" ? "col-span-8" : "col-span-4"} `}>
          <PlanInfo planName={planName} />
        </div>
        <div className={`${planName === "mca" ? "col-span-4" : "col-span-8"} `}>
          {planName === "mca" ? (
            <div className="flex justify-end">
              <ToggleBtn planName={planName} />
            </div>
          ) : (
            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-3 ">
              {options?.map((item, index) => (
                <Fragment key={index}>
                  <RoundButton item={item} {...props} />
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-gray-300 border-solid my-5"></div>
    </div>
  );
}
