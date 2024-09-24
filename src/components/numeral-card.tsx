"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

export const NumeralCard = ({
  number,
  label,
}: {
  number: number;
  label: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="flex gap-3 items-center">
      {isInView && (
        <CountUp
          start={0}
          end={number}
          duration={2}
          className="text-6xl font-bold text-primary"
        />
      )}
      <p className="text-base font-normal text-primary">{label}</p>
    </div>
  );
};
