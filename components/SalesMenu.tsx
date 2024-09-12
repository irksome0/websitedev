"use client";

import { useState } from "react";
import inbox_stack from "@/public/inbox-stack.svg";
import inbox_notification from "@/public/inbox-notification.svg";
import inbox_ongoing from "@/public/inbox-ongoing.svg";
import inbox_archive from "@/public/inbox-archive.svg";

import { SalesMenuButton } from "./SalesMenuButton";

const Pages = [
  { page: 0, name: "All", special: "start", specialIcon: inbox_stack },
  {
    page: 1,
    name: "Requested",
    special: "none",
    specialIcon: inbox_notification,
  },
  { page: 2, name: "Ongoing", special: "none", specialIcon: inbox_ongoing },
  { page: 3, name: "Archived", special: "end", specialIcon: inbox_archive },
];

export const SalesMenu = () => {
  const [page, setPage] = useState<number>(0);
  return (
    <nav className="gap-0 font-medium text-button text-txt-secondary">
      {Pages.map((element, index) => (
        <SalesMenuButton
          key={index}
          active={page === index}
          name={element.name}
          specialIcon={element.specialIcon}
          special={element.special}
          page={element.page}
          setPage={(val:number) => setPage(val)}
        />
      ))}
    </nav>
  );
};
