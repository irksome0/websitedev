import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full px-5 py-16 bg-bg-quaternary">
      <div className="w-full flex flex-col bg-bg-tertiary rounded-3xl p-5">
        <div className="flex flex-row gap-4 mb-5">
          <div className="w-1/3 border-r-2 border-border-secondary">
            <h1 className="text-xs text-txt-tertiary mb-5">Navigation</h1>
            <div className="grid rows-2 grid-cols-4 text-center pe-7 gap-y-6">
              <Link className="text-txt-supp-tertiary" href={"/about"}>
                About us
              </Link>
              <Link className="text-txt-supp-tertiary" href={"/discover"}>
                Discover collabs
              </Link>
              <Link className="text-txt-supp-tertiary" href={"/messages"}>
                Messages
              </Link>
              <Link className="text-txt-supp-tertiary" href={"/orders"}>
                My orders
              </Link>
              <Link className="text-txt-supp-tertiary" href={"/sales"}>
                My sales
              </Link>
            </div>
          </div>
          <div className="w-1/3  border-r-2 border-border-secondary">
            <h1 className="text-txt-tertiary text-xs mb-5">Preferences</h1>
            <div className="grid rows-2 grid-cols-3 text-center pe-8">
              <Link className="text-txt-supp-tertiary" href={"/about"}>
                Account preferences
              </Link>
              <Link className="text-txt-supp-tertiary" href={"/discover"}>
                Settings
              </Link>
              <Link className="text-txt-supp-tertiary" href={"/messages"}>
                Log out
              </Link>
            </div>
          </div>
          <div className="w-1/3">
            <h1 className="text-txt-tertiary text-xs  mb-5">Support</h1>
            <div className="grid rows-2 grid-cols-3 text-center pe-8">
              <Link className="text-txt-supp-tertiary" href={"/about"}>
                Contact us
              </Link>
              <Link className="text-txt-supp-tertiary" href={"/discover"}>
                How it works
              </Link>
              <Link className="text-txt-supp-tertiary" href={"/messages"}>
                FaQ
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="h-[44px] w-[132px] rounded-lg border-2 border-yellow-500 border-dashed" />
          <div className="flex items-end">
            <p className="text-txt-queternary text-xs">
              &#64; CoCreate inc. all rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
