import { motion } from "framer-motion";
import {
  disabledOptionsVariants,
  optionsVariants,
} from "./variants/optionsVariants";

export const OptionButton = (props: OptionButtonProps) => {
  if (props.active) {
    return (
      <motion.button
        whileHover="hover"
        whileTap="tap"
        animate="initial"
        onClick={props.action}
        variants={optionsVariants}
        transition={{ duration: 0.2, ease: "easeIn" }}
        id={`${props.name}`}
        className="flex cursor-pointer flex-row-reverse items-center justify-center gap-2 rounded-3xl border-2 border-border-secondary bg-bg-button-primary bg-bg-button-supp-secondary p-2 text-base text-txt-supp-primary"
      >
        <span className="material-symbols-outlined">close</span>
        {props.name}
      </motion.button>
    );
    // biome-ignore lint/style/noUselessElse: variation of button conditions
  } else {
    return (
      <motion.button
        whileHover="hover"
        whileTap="tap"
        animate="initial"
        onClick={() => props.action()}
        variants={disabledOptionsVariants}
        transition={{ duration: 0.2, ease: "easeIn" }}
        id={`${props.name}`}
        className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-3xl border-2 border-border-secondary bg-bg-button-primary bg-bg-button-supp-secondary p-2 text-base text-txt-supp-primary"
      >
        <span className="material-symbols-outlined">{props.specialIcon}</span>
        {props.name}
      </motion.button>
    );
  }
};
