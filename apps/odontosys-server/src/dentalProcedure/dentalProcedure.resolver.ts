import * as graphql from "@nestjs/graphql";
import { DentalProcedureResolverBase } from "./base/dentalProcedure.resolver.base";
import { DentalProcedure } from "./base/DentalProcedure";
import { DentalProcedureService } from "./dentalProcedure.service";

@graphql.Resolver(() => DentalProcedure)
export class DentalProcedureResolver extends DentalProcedureResolverBase {
  constructor(protected readonly service: DentalProcedureService) {
    super(service);
  }
}
