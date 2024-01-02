import React from "react";
import { MetaTags } from "@/contants/meta-data";
import { Metadata } from "next";

export const metadata: Metadata = MetaTags?.mainPage;

export default function MainPage() {
  return (
    <div>
      Main Page
    </div>
  );
}
