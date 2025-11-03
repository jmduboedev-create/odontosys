import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TreatmentWhereInput = {
  appointmentId?: IntNullableFilter;
  clinicId?: IntNullableFilter;
  cost?: FloatNullableFilter;
  createdAt?: DateTimeFilter;
  date?: DateTimeNullableFilter;
  id?: IntFilter;
  invoiceId?: IntNullableFilter;
  invoiceItem?: InvoiceItemListRelationFilter;
  observations?: StringNullableFilter;
  patientId?: IntFilter;
  procedureName?: StringFilter;
  professionalId?: IntFilter;
  status?: "PLANNED" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  surface?: StringNullableFilter;
  tooth?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
