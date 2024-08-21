"use client";

import { useState } from "react";

export const OrdersModule = () => {
  const [orders, setOrders] = useState<number>(0);
  const [completedOrders, setCompletedOrders] = useState<number>(0);
  return (
    <div className="flex flex-row gap-3 text-small text-txt-queternary">
      <p>{orders} orders,</p>
      <p>{completedOrders} completed</p>
    </div>
  );
};
