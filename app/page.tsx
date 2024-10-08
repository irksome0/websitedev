"use client";

import { redirectTo } from "@/utils/redirectTo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirectTo("/discover");
  });
}
