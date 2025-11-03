import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatFilter;
  date?: DateTimeFilter;
  id?: IntFilter;
  invoice?: InvoiceWhereUniqueInput;
  method?: StringFilter;
  reference?: StringNullableFilter;
};
