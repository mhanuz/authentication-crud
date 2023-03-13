export interface VatResult {
  message: string;
  count: number;
  data: VatsData[];
}

export interface VatsData {
  id: number;
  categoryName: string;
  rStatus: boolean;
}
