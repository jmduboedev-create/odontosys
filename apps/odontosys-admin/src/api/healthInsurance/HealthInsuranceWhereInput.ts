import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DentalProcedurePriceListRelationFilter } from "../dentalProcedurePrice/DentalProcedurePriceListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type HealthInsuranceWhereInput = {
  code?: StringFilter;
  contact?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  dentalProcedurePrice?: DentalProcedurePriceListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  observations?: StringNullableFilter;
  phone?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
