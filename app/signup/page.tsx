"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/variants/buttonsVariants";
import Link from "next/link";
import { signup } from "./actions";

const validateEmail = (email: string) => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(email);
}
const validatePassword = (password: string) => {
  if(password.length < 9){
    return false;
  }return true;
}

export default function Signup() {
  const [error, setError] = useState<string>("");
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const togglePassword = () => {
    setIsPasswordShown((prev) => !prev);
  };
  const validate = (formData: FormData) => {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirmation: formData.get("confirmPassword") as string
    }
    if(!validateEmail(data.email)){
      setError("Email you have entered is not valid");
      return false;
    }   
    if(!validatePassword(data.password)){
      setError("Password should be at least 9 symbols long")
      return false;
    }
    if(data.password !== data.confirmation){
      setError("Password was not confirmed")
      return false;
    }
    signup(formData);
  };
  return(
    <main className="flex flex-col justify-center h-screen items-center bg-bg-tertiary pt-4">
      <div className="w-1/2 shadow-md flex flex-col items-center justify-center border-2 border-border-secondary rounded-3xl px-3 py-10 bg-bg-secondary">
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
            formAction={(e) => (validate(e))}
            className="flex cursor-pointer outline-border-primary outline-offset-2 outline-2 focus: z-10 flex-row items-center justify-center gap-1 rounded-[12px] border bg-bg-secondary px-5 py-2 font-bold text-button text-txt-secondary mt-4"
          >
            Confirm
          </motion.button>
          <span className="text-txt-error-primary text-small flex justify-center items-center text-center font-medium">{error}</span>
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
