"use client";

import { redirectTo } from "@/utils/redirectTo";
import { useEffect } from "react";

export default function Sales() {
  useEffect(() => {
    redirectTo("sales/1");
  });
}
