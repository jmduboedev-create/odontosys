import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OdontogramService } from "./odontogram.service";
import { OdontogramControllerBase } from "./base/odontogram.controller.base";

@swagger.ApiTags("odontograms")
@common.Controller("odontograms")
export class OdontogramController extends OdontogramControllerBase {
  constructor(protected readonly service: OdontogramService) {
    super(service);
  }
}
