"use client";

import { ReactNode } from "react";
import { r3f } from "@/lib/tunnel";

type TProps = {
  children: ReactNode;
};

export const Three = ({ children }: TProps) => {
  return <r3f.In>{children}</r3f.In>;
};
