import Image from "next/image";
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { liVariants, hrVariants } from "./variants/headerVariants";
import { pVariants } from "./variants/headerVariants";
import { redirectTo } from "@/utils/redirectTo";

export const NavigationItem = (props: NavigationItemProps) => {
  // const router = useRouter();
  const redirect = (path: string) => {
    const validatedPath = path === "about us" ? "about" : path;
    // router.replace(validatedPath);
    // router.push(validatedPath);
    redirectTo(validatedPath);
  };
  if (props.active) {
    if (props.name === "messages") {
      return (
        <motion.div className="relative flex cursor-pointer flex-col items-center gap-0.5">
          <li
            className="flex cursor-pointer flex-row gap-0.5 border-border-brand-primary border-b-2 border-solid text-txt-brand-primary decoration-0 capitalize"
            onClick={() => redirect(props.name)}
          >
            {props.messages ? (
              <p className="-right-3 absolute bottom-[22px] m-0 min-w-[22px] rounded-2xl bg-bg-button-brand-primary p-1 text-center font-normal text-small text-txt-onbrand-primary">
                {props.messages}
              </p>
            ) : (
              <div />
            )}

            <Image
              src={props.specialIcon}
              width={20}
              height={20}
              alt={props.name}
              style={{
                filter:
                  " brightness(0) saturate(100%) invert(49%) sepia(18%) saturate(7454%) hue-rotate(140deg) brightness(100%) contrast(101%)",
              }}
            />
            {props.name}
          </li>
        </motion.div>
      );
    }
    return (
      <li
        className="flex cursor-pointer flex-row gap-0.5 border-border-brand-primary border-b-2 border-solid text-txt-brand-primary decoration-0 capitalize"
        onClick={() => redirect(props.name)}
      >
        <Image
          src={props.specialIcon}
          width={20}
          height={20}
          alt={props.name}
          style={{
            filter:
              " brightness(0) saturate(100%) invert(49%) sepia(18%) saturate(7454%) hue-rotate(140deg) brightness(100%) contrast(101%)",
          }}
        />
        {props.name}
      </li>
    );
  }
  if (props.name === "messages") {
    return (
      <motion.div
        className="relative flex cursor-pointer flex-col items-center gap-0.5"
        whileHover="hover"
      >
        {props.messages ? (
          <motion.p
            className="-right-3 absolute bottom-[22px] m-0 min-w-[22px] rounded-2xl bg-bg-button-brand-primary p-1 text-center font-normal text-small text-txt-onbrand-primary"
            variants={pVariants}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            {props.messages}
          </motion.p>
        ) : (
          <div />
        )}

        <motion.li
          className="flex cursor-pointer flex-row gap-0.5 text-txt-secondary decoration-0"
          variants={liVariants}
          transition={{ duration: 0.2, ease: "easeIn" }}
          onClick={() => redirect("messages")}
        >
          <Image
            src={props.specialIcon}
            width={20}
            height={20}
            alt="messages"
          />
          Messages
        </motion.li>
        <motion.hr
          className="bottom-0 border"
          variants={hrVariants}
          transition={{ duration: 0.2, ease: "easeIn" }}
        />
      </motion.div>
    );
  }
  return (
    <motion.div
      className="relative flex cursor-pointer flex-col items-center gap-0.5"
      whileHover="hover"
      onClick={() => redirect(props.name)}
    >
      <motion.li
        className="flex cursor-pointer flex-row gap-0.5 text-txt-secondary decoration-0 capitalize"
        variants={liVariants}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        <Image
          src={props.specialIcon}
          width={20}
          height={20}
          alt={props.name}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(21%) sepia(7%) saturate(1432%) hue-rotate(181deg) brightness(94%) contrast(91%)",
          }}
        />
        {props.name}
      </motion.li>
      <motion.hr
        className="bottom-0 border"
        variants={hrVariants}
        transition={{ duration: 0.2, ease: "easeIn" }}
      />
    </motion.div>
  );
};
