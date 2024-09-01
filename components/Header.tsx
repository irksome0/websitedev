"use client";

import Image from "next/image";
import starIcon from "@/public/star.svg";
import discoverIcon from "@/public/discover-icon.svg";
import aboutIcon from "@/public/aboutus-icon.svg";
import salesIcon from "@/public/sales-icon.svg";
import { useEffect, useState } from "react";
import menuIcon from "@/public/menu.svg";
import { motion } from "framer-motion";
import avatarImage from "@/public/avatar.jpg";
import { MenuPopup } from "./MenuPopup";
import { hrMenuVariants } from "./variants/headerVariants";
import { NavigationItem } from "./NavigationItem";
import messagesIcon from "@/public/messages-icon.svg";

export const Header = (props: HeaderProps) => {
  const [user, setUser] = useState<UserState>(props.user);
  const [messages, setMessages] = useState<number>(2333);
  const [menuText, setMenuText] = useState<string>(user.email as string);
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  useEffect(() => {
    handleSetMessages();
  }, []);

  const handleSetMessages = () => {
    setMessages(2333);
    setUser(props.user);
  };
  const openMenu = () => {
    setDisplayMenu((prev) => !prev);
  };

  return (
    <header className="mx-5 flex flex-row items-center justify-between gap-[20px] self-stretch rounded-3xl border border-border-secondary p-[20px] shadow-sm backdrop-blur-[20px]">
      <div className="h-[44px] w-[132px] rounded-lg border-2 border-yellow-500 border-dashed" />
      <ul className="flex flex-row gap-3 font-medium text-button">
        <NavigationItem
          name="discover"
          active={props.active === "discover"}
          specialIcon={discoverIcon}
          messages={messages}
        />
        <NavigationItem
          name="about us"
          active={props.active === "about"}
          specialIcon={aboutIcon}
          messages={messages}
        />
        <NavigationItem
          name="messages"
          active={props.active === "messages"}
          specialIcon={messagesIcon}
          messages={messages}
        />
        <NavigationItem
          name="sales"
          active={props.active === "sales"}
          specialIcon={salesIcon}
          messages={messages}
        />
      </ul>
      <motion.nav
        className="flex cursor-pointer flex-row items-center gap-3"
        whileHover="hover"
        onClick={openMenu}
        onHoverStart={() =>
          setMenuText(displayMenu ? "Close menu" : "Open menu")
        }
        onHoverEnd={() => setMenuText(user.email as string)}
      >
        <div className="flex w-32 flex-col items-end">
          <div className="flex flex-row">
            <Image
              src={starIcon}
              width={20}
              height={20}
              alt="Star"
              className="me-1"
            />
            <motion.h1 className="m-0 flex flex-row font-medium text-header-5 text-txt-secondary">
              {user.name} {user.surname}
            </motion.h1>
          </div>
          <motion.hr
            className="border-border-primary_solid"
            variants={hrMenuVariants}
            transition={{ duration: 0.2, ease: "easeIn" }}
          />
          <motion.p className="text-small text-txt-tertiary">
            {menuText}
          </motion.p>
        </div>
        <motion.div
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full border-2 border-yellow-500 border-dashed object-contain"
          variants={{
            initial: {},
            hover: { background: "var(--neutral-200)" },
          }}
        >
          {displayMenu ? (
            <Image
              src={menuIcon}
              width={24}
              height={24}
              className="h-[42px] rounded-full fill-txt-secondary"
              alt="menu"
            />
          ) : (
            <Image
              src={avatarImage}
              className="h-[42px] rounded-full fill-txt-secondary"
              alt="menu"
            />
          )}
        </motion.div>
        <MenuPopup open={displayMenu} user={user} />
      </motion.nav>
    </header>
  );
};
