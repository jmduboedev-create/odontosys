import { BooleanFilter } from "../../util/BooleanFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { ClinicWhereUniqueInput } from "../clinic/ClinicWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DentalProcedurePriceListRelationFilter } from "../dentalProcedurePrice/DentalProcedurePriceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";

export type DentalProcedureWhereInput = {
  active?: BooleanFilter;
  basePrice?: FloatFilter;
  clinic?: ClinicWhereUniqueInput;
  code?: StringFilter;
  createdAt?: DateTimeFilter;
  dentalProcedurePrice?: DentalProcedurePriceListRelationFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  invoiceItem?: InvoiceItemListRelationFilter;
  name?: StringFilter;
  updatedAt?: DateTimeFilter;
};
