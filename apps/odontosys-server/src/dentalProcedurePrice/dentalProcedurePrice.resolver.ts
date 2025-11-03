import * as graphql from "@nestjs/graphql";
import { DentalProcedurePriceResolverBase } from "./base/dentalProcedurePrice.resolver.base";
import { DentalProcedurePrice } from "./base/DentalProcedurePrice";
import { DentalProcedurePriceService } from "./dentalProcedurePrice.service";

@graphql.Resolver(() => DentalProcedurePrice)
export class DentalProcedurePriceResolver extends DentalProcedurePriceResolverBase {
  constructor(protected readonly service: DentalProcedurePriceService) {
    super(service);
  }
}
