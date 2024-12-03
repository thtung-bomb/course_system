export interface ListData {
  id: number;
  name: string;
  detail: React.FC;
}
export interface ListItemProps {
  listdata: ListData[];
  position?: "left" | "center" | "right";
}
