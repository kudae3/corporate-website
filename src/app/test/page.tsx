"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";

function Page() {
  return (
    <PinContainer title="Our Goals">
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="text-primary-50 mb-6">
          To empower businesses through innovative technology solutions that
          drive growth, efficiency, and competitive advantage in the digital
          age.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className=" rounded-lg p-4">
            <h4 className="font-semibold mb-2">Innovation</h4>
            <p className="text-sm text-primary-100">Cutting-edge solutions</p>
          </div>
          <div className="rounded-lg p-4">
            <h4 className="font-semibold mb-2">Quality</h4>
            <p className="text-sm text-primary-100">Excellence in delivery</p>
          </div>
        </div>
      </div>
    </PinContainer>
  );
}

export default Page;
