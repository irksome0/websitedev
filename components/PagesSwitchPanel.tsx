import { redirectTo } from "@/utils/redirectTo";
import { usePathname } from "next/navigation";

export const PagesSwitchPanel = (props: PagesSwitchPanelProps) => {
  const pathname = usePathname();
  const redirect = (path: number) => {
    redirectTo(`${pathname.substring(0, pathname.lastIndexOf("/"))}/${path}`);
  };
  // const switchLeft = () =>

  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="divide-x-4 divide-border-secondary flex flex-row rounded-xl border border-border-secondary">
        <button className="material-symbols-outlined bg-fg-disabled text-txt-disabled p-2 rounded-s-xl">
          chevron_left
        </button>
        <div className="text-txt-primary text-base font-medium flex flex-row divide-x-2 divide-border-secondary">
          {[...Array(props.amountOfPages)].map((_x, i) => (
            <button
              className="px-4 py-2 items-center justify-center text-center"
              key={i}
              onClick={() => redirect(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button className="material-symbols-outlined bg-fg-disabled text-txt-disabled p-2 rounded-e-xl">
          chevron_right
        </button>
      </div>
    </div>
  );
};
