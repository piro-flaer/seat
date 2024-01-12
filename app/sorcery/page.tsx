"use client";

import { useState } from "react";
import CardWrapper from "../auth/components/CardWrapper";

const SorceryPage = () => {
  const [service, setService] = useState<"request" | "publish">("request");
  return (
    <>
      <div className="h-fit w-full flex flex-col items-center">
        <div className="rounded-lg shadow-lg font-semibold text-xl w-fit flex h-fit bg-[#F0F8FF] mt-4 p-2">
          <p
            onClick={() => {
              setService("request");
            }}
            className={`${
              service === "request"
                ? "bg-blue-500 shadow-md font-bold"
                : "bg-white shadow-none font-semibold"
            } px-10 py-2 duration-300 origin-right rounded-lg cursor-pointer`}
          >
            Request
          </p>
          <p className="h-7 my-2 w-[2px] bg-black mx-1" />
          <p
            onClick={() => {
              setService("publish");
            }}
            className={`${
              service === "publish"
                ? "bg-blue-500 shadow-md font-bold"
                : "bg-white shadow-none font-semibold"
            } px-10 py-2 duration-300 origin-right rounded-lg cursor-pointer`}
          >
            Publish
          </p>
        </div>
        {service === "request" ? (
          <>
            <CardWrapper cardTitle={"Request A Seat Switch"}></CardWrapper>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SorceryPage;
