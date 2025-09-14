// 메뉴
export interface Menu {
  id: string;
  icon: React.ElementType;
  label: string;
  count?: number;
  special?: boolean;
  url: string;
}
