import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "notes";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.notes?.toString() || String(record.id);
};
