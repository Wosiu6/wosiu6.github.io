import IListItem from "./IListItem";

export default interface BaseListProps {
  items: IListItem[];
  title: string;
  isMainPage?: boolean;
}