import * as graphql from "@nestjs/graphql";
import { ProfessionalResolverBase } from "./base/professional.resolver.base";
import { Professional } from "./base/Professional";
import { ProfessionalService } from "./professional.service";

@graphql.Resolver(() => Professional)
export class ProfessionalResolver extends ProfessionalResolverBase {
  constructor(protected readonly service: ProfessionalService) {
    super(service);
  }
}
