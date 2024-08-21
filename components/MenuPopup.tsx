import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import avatar from "@/public/avatar.jpg";
import Image from "next/image";
import {
  buttonVariants,
  logoutButtonVariants,
} from "./variants/buttonsVariants";

const variants = {
  open: { width: 400, opacity: 1, x: "-55%", y: "0%" },
  closed: { width: 0, opacity: 0, x: "-55%", y: "-100%" },
};

export const MenuPopup = (props: PopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);
  return (
    <motion.nav
      className="absolute top-24 rounded-3xl border-2 border-border-tertiary py-1 bg-bg-secondary shadow-md z-50"
      initial={{ opacity: 0 }}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <div className="m-5 flex items-start">
        <h1 className="font-medium text-header-4 text-txt-tertiary">Menu:</h1>
      </div>
      <div className="my-5 mx-5 flex items-center justify-center flex-col">
        <Image
          className="h-20 w-20 rounded-full"
          src={avatar}
          width={80}
          height={80}
          alt="avatar"
        />
        <h1 className="font-medium text-header-4 text-txt-supp-primary">
          {props.user.name} {props.user.surname}
        </h1>
        <h3 className="font-base text-small text-txt-tertiary">
          {props.user.email}
        </h3>
        <article className="grid grid-cols-3 gap-4 place-items-center w-full">
          <span className="border-y w-full"></span>
          <h4 className="text-2xl text-txt-quinary text-micro w-fit">
            Preferences
          </h4>
          <span className="border-y w-full"></span>
        </article>
        <motion.button
          onClick={() => console.log("test")}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          className="focus:z-10 focus:border-border-secondary outline-border-primary outline-offset-2 outline-2 bg-bg-primary flex flex-row items-start py-3 px-3 text-txt-secondary w-full font-medium gap-2 border-border-tertiary border-2 rounded-xl"
        >
          <motion.span
            className="material-symbols-outlined"
            variants={{
              initial: { color: "var(--error-500)" },
              hover: { color: "var(--neutral-900)" },
              tap: { color: "var(--neutral-700)" },
            }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            settings_account_box
          </motion.span>
          My profile & account
        </motion.button>
        <motion.button
          onClick={() => console.log("test")}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          className="focus:z-10 focus:border-border-secondary outline-border-primary outline-offset-2 outline-2 bg-bg-primary flex flex-row items-start py-3 px-3 text-txt-secondary w-full font-medium gap-2 border-border-tertiary border-2 rounded-xl"
        >
          <motion.span
            className="material-symbols-outlined"
            variants={{
              initial: { color: "var(--error-500)" },
              hover: { color: "var(--neutral-900)" },
              tap: { color: "var(--neutral-600)" },
            }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            settings
          </motion.span>
          Settings
        </motion.button>
        <motion.button
          onClick={() => console.log("test")}
          whileHover="hover"
          whileTap="tap"
          variants={logoutButtonVariants}
          transition={{ duration: 0.2, ease: "easeIn" }}
          className="focus:z-10 focus:border-border-error-primary border-error-tertiary outline-border-primary outline-offset-2 outline-2 flex flex-row items-start py-3 px-3 text-txt-error-primary w-full font-medium gap-2 border-2 rounded-xl"
        >
          <motion.span
            className="material-symbols-outlined"
            variants={{
              initial: { color: "var(--error-500)" },
              hover: { color: "var(--error-50)" },
              tap: { color: "var(--neutral-600)" },
            }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            door_open
          </motion.span>
          Log out
        </motion.button>
      </div>
    </motion.nav>
  );
};
