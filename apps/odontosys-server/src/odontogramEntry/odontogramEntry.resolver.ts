import * as graphql from "@nestjs/graphql";
import { OdontogramEntryResolverBase } from "./base/odontogramEntry.resolver.base";
import { OdontogramEntry } from "./base/OdontogramEntry";
import { OdontogramEntryService } from "./odontogramEntry.service";

@graphql.Resolver(() => OdontogramEntry)
export class OdontogramEntryResolver extends OdontogramEntryResolverBase {
  constructor(protected readonly service: OdontogramEntryService) {
    super(service);
  }
}
