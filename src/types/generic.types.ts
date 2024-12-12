export interface WidgetType {
  id: number;
  type: string;
  amount: number;
  action: string;
  active: boolean;
  linked: boolean;
  selectedColor: string;
  unit?: string;
}

export interface MenuPositions {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}
