import React from "react";
import Cart from "./components/Cart";
import Flexiplan from "./components/Flexiplan";
import StoreProvider from "./StoreProvider";


export default function Home() {
  return (
    <StoreProvider>
      <div className="w-screen p-5 flex flex-col md:flex-row  gap-6 justify-center">
       <Flexiplan />
       
       <Cart />
       </div>
      {/* <div className="flex justify-center">
        <div className="grid grid-cols-12 gap-10 justify-items-center px-0 md:px-10 py-5 max-w-screen-lg">
          <div className="col-span-12 md:col-span-7 lg:col-span-7 flex justify-center">
            <Flexiplan />
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-5  w-full">
            <Cart />
          </div>
        </div>
      </div> */}
    </StoreProvider>
  );
}
