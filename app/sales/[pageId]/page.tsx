import { Header } from "@/components/Header";
import { SalesMenu } from "@/components/SalesMenu";
import { OrdersModule } from "@/components/OrdersModule";
import { Footer } from "@/components/Footer";
import { OrderModule } from "@/components/OrderModule";

const Orders = [
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
  {
    collaborator: "Skiper",
    platform: "Youtube",
    price: 20,
    comment:
      "I want it to be so gracious that even MrBeast will notice my video!!",
    attachments: undefined,
  },
];

export default function SalesPage({ params }: { params: SalesPageParams }) {
  return (
    <main className="flex flex-col items-center bg-bg-tertiary pt-4">
      <Header active="sales" />
      <h1 className="text-3xl text-txt-secondary font-bold">{params.pageId}</h1>
      <section className="flex w-full flex-col items-center justify-center px-5 py-8">
        <h1 className="mb-5 font-medium text-header-2 text-txt-secondary">
          Your orders:
        </h1>
        <div className="flex w-full flex-row justify-between px-5">
          <h2 className="text-header-3 text-txt-secondary">All orders</h2>
          <SalesMenu />
          <OrdersModule />
        </div>
      </section>
      <div className="flex w-full flex-col gap-5 px-5 py-5">
        {Orders.map((element, index) => (
          <OrderModule
            key={index}
            collaborator={element.collaborator}
            platform={element.platform}
            price={element.price}
            comment={element.comment}
            attachments={element.attachments}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
