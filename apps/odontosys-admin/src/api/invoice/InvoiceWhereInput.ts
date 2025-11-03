import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type InvoiceWhereInput = {
  clinic?: ClinicWhereUniqueInput;
  createdAt?: DateTimeFilter;
  date?: DateTimeFilter;
  id?: IntFilter;
  invoiceItem?: InvoiceItemListRelationFilter;
  notes?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  payment?: PaymentListRelationFilter;
  status?: "PENDING" | "PAID" | "CANCELLED";
  totalAmount?: FloatFilter;
  updatedAt?: DateTimeFilter;
};
