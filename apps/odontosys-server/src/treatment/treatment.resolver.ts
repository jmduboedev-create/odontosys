import * as graphql from "@nestjs/graphql";
import { TreatmentResolverBase } from "./base/treatment.resolver.base";
import { Treatment } from "./base/Treatment";
import { TreatmentService } from "./treatment.service";

@graphql.Resolver(() => Treatment)
export class TreatmentResolver extends TreatmentResolverBase {
  constructor(protected readonly service: TreatmentService) {
    super(service);
  }
}
