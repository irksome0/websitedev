
import { type SettingsModalProps } from "@/typings";
import {motion} from "framer-motion";
import AccountForm from "./AccountForm";

export const SettingsModal =  (props: SettingsModalProps) => {

    return(
      <motion.div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.2)]">
      <motion.div
        className="relative bottom-28 w-1/3 font-medium bg-bg-primary rounded-3xl border-border-secondary p-6"
        initial={{ type: "spring", y: 0 }}
        animate={{ type: "spring", y: "25%" }}
      >
        <div className="flex flex-row justify-end w-full">
          <button className="focus:outline focus:outline-border-secondary text-txt-secondary rounded-full hover:text-txt-tertiary active:text-txt-primary material-symbols-outlined" onClick={props.close}>close</button>
        </div>
        <AccountForm user={props.user}/>
      </motion.div>
    </motion.div>
  );
}