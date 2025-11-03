import * as graphql from "@nestjs/graphql";
import { HealthInsuranceResolverBase } from "./base/healthInsurance.resolver.base";
import { HealthInsurance } from "./base/HealthInsurance";
import { HealthInsuranceService } from "./healthInsurance.service";

@graphql.Resolver(() => HealthInsurance)
export class HealthInsuranceResolver extends HealthInsuranceResolverBase {
  constructor(protected readonly service: HealthInsuranceService) {
    super(service);
  }
}
