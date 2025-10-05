"use client";

import React from "react";
import ThemeProvider from "@/context/ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
