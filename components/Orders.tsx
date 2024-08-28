"use client";

import { useSalesStore } from "@/providers/salesStoreProvider";
import { OrderModule } from "./OrderModule";
import { useEffect, useState } from "react";
import { PagesSwitchPanel } from "./PagesSwitchPanel";
export const Orders = (props: { page: number }) => {
  const orders = useSalesStore((state) => state.orders);
  const [indexes, setIndexes] = useState([0, 2]);
  useEffect(() => {
    if (props.page === 1) {
      setIndexes([0, 2]);
    } else {
      setIndexes([props.page * 3 - 3, props.page * 3 - 1]);
    }
  }, [props.page]);
  return (
    <>
      {orders.map((element, index) => {
        if (index >= indexes[0] && index <= indexes[1]) {
          return (
            <OrderModule
              key={index}
              collaborator={element.collaborator}
              platform={element.platform}
              price={element.price}
              comment={element.comment}
              attachments={element.attachments}
              type={element.status}
            />
          );
        }
      })}
      <PagesSwitchPanel amountOfPages={Math.trunc(orders.length / 3)} />
    </>
  );
};
