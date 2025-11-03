import { Invoice } from "../invoice/Invoice";

export type Payment = {
  amount: number;
  date: Date;
  id: number;
  invoice?: Invoice;
  method: string;
  reference: string | null;
};
