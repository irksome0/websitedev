
// biome-ignore lint/correctness/noUnusedVariables: type
interface OptionButtonProps {
  active: boolean;
  action: () => void;
  name: string;
  specialIcon: string | undefined;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface HeaderProps {
  active: string;
  user: UserState;
}
interface UserState {
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface PopupProps {
  open: boolean;
  user: UserState;
}

// biome-ignore lint/correctness/noUnusedVariables: type
interface FiltersModalProps {
  closeModal: () => void;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface GendersProps {
  male: boolean;
  female: boolean;
  other: boolean;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface CollaborationState {
  m4m: boolean;
  m4f: boolean;
  m4a: boolean;
  f4m: boolean;
  f4f: boolean;
  fm4f: boolean;
  f4a: boolean;
  t4m: boolean;
  t4f: boolean;
  t4a: boolean;
  fm4m: boolean;
  a4a: boolean;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface FilterProps {
  clear: () => void;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface NavigationItemProps{
  active: boolean;
  name: string;
  specialIcon: any;
  messages: number;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface SalesMenuButtonProps{
  active: boolean;
  name: string;
  specialIcon: any;
  special?: string;
  setPage: (number) => void;
  page: number;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface OrderModuleProps{
  collaborator: string;
  platform: string;
  price: number;
  comment?: string;
  attachments?: File;
  type:string;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface OrderState{
  uuid: string;
  collaborator: string;
  platform: string;
  price: number;
  comment?: string;
  attachments?: File;
  status: string;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface OrderProgressProps{
  collaborator:string;
  type: string;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface SalesPageParams{
  pageId: string;
}
// biome-ignore lint/correctness/noUnusedVariables: type
interface PagesSwitchPanelProps{
  amountOfPages: number;
}