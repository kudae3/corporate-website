"use client";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const YangonMap = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/components/MyMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  const position: [number, number] = [16.8661, 96.1951];
  const zoom = 15;
  return (
    <>
      <Map position={position} zoom={zoom} />
    </>
  );
};

export default YangonMap;
