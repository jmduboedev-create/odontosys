import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OdontogramEntryService } from "./odontogramEntry.service";
import { OdontogramEntryControllerBase } from "./base/odontogramEntry.controller.base";

@swagger.ApiTags("odontogramEntries")
@common.Controller("odontogramEntries")
export class OdontogramEntryController extends OdontogramEntryControllerBase {
  constructor(protected readonly service: OdontogramEntryService) {
    super(service);
  }
}
