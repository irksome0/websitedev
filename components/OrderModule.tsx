"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "./variants/buttonsVariants";
import personInformationIcon from "@/public/person-information.svg";
import chatBubblesIcon from "@/public/chat-bubbles.svg";
import Image from "next/image";
import { useState } from "react";
import { OrderProgress } from "./OrderProgress";

const initialAttachmentsState = {
  attachments: [],
  filesNames: [],
};

export const OrderModule = (props: OrderModuleProps) => {
  const [atts, setAtts] = useState<any>(initialAttachmentsState);
  // const [attachments, setAttachments] = useState([]);
  // const [inputValues, setInputValues] = useState([]);

  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  const handleChangeAttachments = (event: any) => {
    // setInputValues([...inputValues, event.target.value]);
    // console.log(inputValues);
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if (event.target.files && event.target.files[0]) {
      setAtts({
        ...atts,
        attachments: [
          ...atts.attachments,
          URL.createObjectURL(event.target.files[0]),
        ],
        filesNames: [...atts.filesNames, event.target.value],
      });
      // setAttachments([
      //   ...attachments,
      //   URL.createObjectURL(event.target.files[0]),
      // ]);
    }
  };

  return (
    <div className="flex w-full flex-col rounded-2xl border border-border-secondary bg-bg-secondary p-5">
      <div className="flex flex-row items-center justify-between pb-5">
        <h1 className="text-sm text-txt-secondary">
          <b>You</b>&apos;ve made an order with <b>{props.collaborator}</b>
        </h1>
        <div className="flex flex-row">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="focus: flex cursor-pointer flex-row items-center justify-center gap-1 rounded-[20px] border bg-bg-secondary px-5 py-2 font-medium text-button text-txt-secondary outline-2 outline-border-primary outline-offset-2"
          >
            <Image
              width={24}
              height={24}
              src={personInformationIcon}
              alt="person information"
            />
            About {props.collaborator}
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="focus: flex cursor-pointer flex-row items-center justify-center gap-1 rounded-[20px] border bg-bg-secondary px-5 py-2 font-medium text-button text-txt-secondary outline-2 outline-border-primary outline-offset-2"
          >
            <Image
              width={24}
              height={24}
              src={chatBubblesIcon}
              alt="chat bubbles"
            />
            Open chat
          </motion.button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h2 className="text-txt-queternary text-xs">Attachments:</h2>
          {atts.attachments.length === 0 ? (
            <input type="file" onChange={handleChangeAttachments}></input>
          ) : (
            <div>
              <input type="file" onChange={handleChangeAttachments} />
              {atts.filesNames.map((element: string, index: number) => (
                <h2 key={index} className="text-txt-secondary">
                  {(element as string).substring(12)}
                </h2>
              ))}
              {atts.attachments.map((element: any, index: number) => (
                <Image
                  key={index}
                  width={200}
                  height={200}
                  src={element}
                  alt="att"
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex w-full flex-col gap-2 pe-4">
          <h2 className="text-txt-queternary text-xs">Order details:</h2>
          <div className="flex w-full flex-row items-center justify-between gap-3">
            <h1 className="font-medium text-base text-txt-queternary">
              Platform
            </h1>
            <hr className="w-[90%] border border-border-secondary border-dashed" />
            <h1 className="border border-border-secondary px-3 py-1 font-medium text-base text-txt-queternary">
              {props.platform}
            </h1>
          </div>
          <div className="flex w-full flex-row items-center justify-between gap-3">
            <h1 className="font-medium text-base text-txt-queternary">Price</h1>
            <hr className="w-[90%] border border-border-secondary border-dashed" />
            <h1 className="border border-border-secondary px-3 py-1 font-medium text-base text-txt-queternary">
              $ {props.price}
            </h1>
          </div>
          <h2 className="text-txt-queternary text-xs">
            Comment from <b>You</b>:
          </h2>
          <div className="w-full rounded-lg border border-border-secondary px-3 py-1 text-sm text-txt-supp-secondary">
            {props.comment}
          </div>
          <OrderProgress type={props.type} collaborator={props.collaborator} />
        </div>
      </div>
    </div>
  );
};
