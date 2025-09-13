// 모바일 메뉴
export interface MobileMenu {
  id: string;
  icon: React.ElementType;
  label: string;
  count?: number;
  special?: boolean;
  url: string;
}

// PC 메뉴
export interface PcMenu {
  id: string;
  icon: React.ElementType;
  label: string;
  count: number | null;
  url: string;
}
