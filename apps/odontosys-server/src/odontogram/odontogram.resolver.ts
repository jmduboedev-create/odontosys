import * as graphql from "@nestjs/graphql";
import { OdontogramResolverBase } from "./base/odontogram.resolver.base";
import { Odontogram } from "./base/Odontogram";
import { OdontogramService } from "./odontogram.service";

@graphql.Resolver(() => Odontogram)
export class OdontogramResolver extends OdontogramResolverBase {
  constructor(protected readonly service: OdontogramService) {
    super(service);
  }
}
