import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "./variants/buttonsVariants";
import { type SalesMenuButtonProps } from "@/typings";

export const SalesMenuButton = (props: SalesMenuButtonProps) => {
  if (props.active) {
    if (props.special === "start") {
      return (
        <button className="bg-txt-white-secondary text-txt-primary border border-border-primary py-2 px-3 rounded-s-xl inline-flex gap-1">
          <Image
            width={24}
            height={24}
            src={props.specialIcon}
            alt={props.name}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(13%) sepia(27%) saturate(427%) hue-rotate(171deg) brightness(96%) contrast(96%)",
            }}
          />
          {props.name}
        </button>
      );
      // biome-ignore lint/style/noUselessElse: <explanation>
    } else if (props.special === "end") {
      return (
        <button className="inline-flex gap-1 rounded-e-xl border border-border-primary bg-txt-white-secondary px-3 py-2 text-txt-primary capitalize">
          <Image
            width={24}
            height={24}
            src={props.specialIcon}
            alt={props.name}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(13%) sepia(27%) saturate(427%) hue-rotate(171deg) brightness(96%) contrast(96%)",
            }}
          />
          {props.name}
        </button>
      );
    }
    return (
      <button className="inline-flex gap-1 border border-border-primary bg-txt-white-secondary px-3 py-2 text-txt-primary capitalize">
        <Image
          width={24}
          height={24}
          src={props.specialIcon}
          alt={props.name}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(13%) sepia(27%) saturate(427%) hue-rotate(171deg) brightness(96%) contrast(96%)",
          }}
        />
        {props.name}
      </button>
    );
  }
  if (props.special === "start") {
    return (
      <motion.button
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        onClick={() => props.setPage(props.page)}
        className="inline-flex gap-1 rounded-s-xl border border-border-tertiary bg-bg-primary px-3 py-2 capitalize"
      >
        <Image
          width={24}
          height={24}
          src={props.specialIcon}
          alt={props.name}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(41%) sepia(24%) saturate(292%) hue-rotate(172deg) brightness(96%) contrast(86%)",
          }}
        />
        {props.name}
      </motion.button>
    );
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (props.special === "end") {
    return (
      <motion.button
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        onClick={() => props.setPage(props.page)}
        className="inline-flex gap-1 rounded-e-xl border border-border-tertiary bg-bg-primary px-3 py-2 capitalize"
      >
        <Image
          width={24}
          height={24}
          src={props.specialIcon}
          alt={props.name}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(41%) sepia(24%) saturate(292%) hue-rotate(172deg) brightness(96%) contrast(86%)",
          }}
        />
        {props.name}
      </motion.button>
    );
  }
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      onClick={() => props.setPage(props.page)}
      className="bg-bg-primary border border-border-tertiary py-2 px-3 inline-flex gap-1 capitalize"
    >
      <Image
        width={24}
        height={24}
        src={props.specialIcon}
        alt={props.name}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(41%) sepia(24%) saturate(292%) hue-rotate(172deg) brightness(96%) contrast(86%)",
        }}
      />
      {props.name}
    </motion.button>
  );
};
