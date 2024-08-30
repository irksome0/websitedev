"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/variants/buttonsVariants";
import Link from "next/link";
import { signup } from "./actions";

export default function Signup() {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const togglePassword = () => {
    setIsPasswordShown((prev) => !prev);
  };
  // const handleSubmit = (event: Event | SyntheticEvent) => {
  //   event.preventDefault();
  // };
  const validate = (event: FormData) => {
    console.log("Testring");
    return false;
  };
  return (
    <main className="flex flex-col justify-center h-screen items-center bg-bg-tertiary pt-4">
      <div className="w-1/5 shadow-md flex flex-col items-center justify-center border-2 border-border-secondary rounded-3xl px-3 py-10 bg-bg-secondary">
        <h1 className="text-txt-primary font-black text-header-2 mb-5">
          Sign Up
        </h1>
        <form className="flex flex-col gap-3 mb-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-txt-secondary font-bold text-lg"
            >
              Email:
            </label>
            <input
              id="email"
              name="email"
              className="text-txt-tertiary font-medium text-base border border-border-secondary rounded-lg px-3 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-txt-secondary font-bold text-lg"
            >
              Password:
            </label>
            <div className="flex flex-row justify-center items-center gap-2">
              <input
                id="password"
                name="password"
                type={isPasswordShown ? "text" : "password"}
                className="text-txt-tertiary font-medium text-base border border-border-secondary rounded-lg px-3 py-1"
              />
              <div
                className="text-txt-tertiary cursor-pointer text-xl material-symbols-outlined transition ease-out duration-150 select-none hover:text-txt-primary active:text-txt-queternary"
                onClick={togglePassword}
              >
                {isPasswordShown ? "visibility_off" : "visibility"}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-txt-secondary font-bold text-lg"
            >
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="text-txt-tertiary font-medium text-base border border-border-secondary rounded-lg px-3 py-1"
            />
          </div>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            formAction={(e) => (validate(e) ? signup(e) : validate(e))}
            className="flex cursor-pointer outline-border-primary outline-offset-2 outline-2 focus: z-10 flex-row items-center justify-center gap-1 rounded-[12px] border bg-bg-secondary px-5 py-2 font-bold text-button text-txt-secondary mt-4"
          >
            Confirm
          </motion.button>
        </form>
        <Link
          href={"/signin"}
          className="text-txt-tertiary text-sm font-medium mt-5"
        >
          Already have an{" "}
          <span className="text-txt-supp-primary font-bold">account</span>?
        </Link>
      </div>
    </main>
  );
}
