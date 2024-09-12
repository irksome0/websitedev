import { motion } from "framer-motion";
import { optionsVariants } from "./variants/optionsVariants";
import {
  applyButtonVariants,
  buttonVariants,
  logoutButtonVariants,
} from "./variants/buttonsVariants";
import { type OrderProgressProps } from "@/typings";

export const OrderProgress = (props: OrderProgressProps) => {
  if (props.type === "submitted") {
    return (
      <div className="flex flex-row border border-border-secondary justify-between rounded-lg p-4">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-3">
            <span className="border border-border-secondary rounded-full p-1">
              📝
            </span>
            <h1 className="text-txt-supp-primary text-base font-medium">
              Order Submitted!
            </h1>
          </div>
          <h2 className="text-txt-supp-secondary text-sm">
            You successfully placed an order! Wait until
            <b> {props.collaborator} </b>
            accepts your order.
          </h2>
        </div>
        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={optionsVariants}
          className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border-2 border-border-secondary bg-bg-button-primary bg-bg-button-supp-secondary p-2 text-base text-txt-supp-primary font-medium"
        >
          <span className="material-symbols-outlined">close</span>
          Cancel order
        </motion.button>
      </div>
    );
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (props.type === "payment") {
    return (
      <div className="flex flex-row border border-border-onbrand-secondary bg-bg-brand-secondary justify-between rounded-lg p-4">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-3">
            <span className="border border-border-onbrand-secondary rounded-full p-1">
              💸
            </span>
            <h1 className="text-txt-brand-secondary text-base font-medium">
              Order Accepted, Awaiting Payment
            </h1>
          </div>
          <h2 className="text-txt-brand-secondary text-sm">
            You need to pay
            <b> {props.collaborator} </b>
            to get your work started.
          </h2>
        </div>
        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={applyButtonVariants}
          className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border-2 border-border-onbrand-secondary bg-bg-button-brand-secondary p-2 text-base text-txt-onbrand-secondary font-medium"
        >
          <span className="material-symbols-outlined">credit_card</span>
          Complete payment
        </motion.button>
      </div>
    );
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (props.type === "canceled") {
    return (
      <div className="flex flex-row border border-border-onerror-secondary bg-bg-button-error-primary justify-between rounded-lg p-4">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-3">
            <span className="border border-border-secondary rounded-full p-1">
              ❌
            </span>
            <h1 className="text-txt-onerror-secondary text-base font-medium">
              Order Canceled
            </h1>
          </div>
          <h2 className="text-txt-error-primary text-sm">You canceled order</h2>
        </div>
        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={logoutButtonVariants}
          className="text-txt-error-primary px-4 border rounded-xl border-fg-error-primary outline-border-primary text-base font-medium flex items-center gap-3"
        >
          Re-open new order
        </motion.button>
      </div>
    );
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (props.type === "progress") {
    return (
      <div className="flex flex-row border border-border-onbrand-secondary bg-bg-brand-secondary justify-between rounded-lg p-4">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-3">
            <span className="border border-border-onbrand-secondary rounded-full p-1">
              ⏳
            </span>
            <h1 className="text-txt-brand-secondary text-base font-medium">
              Payment Successful! Work in Progress
            </h1>
          </div>
          <h2 className="text-txt-brand-secondary text-sm">
            You have successfully paid! Now wait until
            <b> {props.collaborator} </b>
            finishes your work.
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row border border-border-secondary justify-between rounded-lg p-4">
      <div className="flex flex-col">
        <div className="inline-flex items-center gap-3">
          <span className="border border-border-secondary rounded-full p-1">
            🎉
          </span>
          <h1 className="text-txt-primary text-base font-medium">
            Work Completed! Time to Review
          </h1>
        </div>
        <h2 className="text-txt-secondary text-sm">
          Your order is done. Open the files that <b> {props.collaborator} </b>{" "}
          has completed for you.
        </h2>
      </div>
      <motion.button
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border-2 border-border-secondary bg-bg-button-primary bg-bg-button-base-secondary p-2 text-base text-txt-secondary font-medium"
      >
        <span className="material-symbols-outlined">download</span>
        Download files
      </motion.button>
    </div>
  );
};
