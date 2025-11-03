import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DentalProcedureService } from "./dentalProcedure.service";
import { DentalProcedureControllerBase } from "./base/dentalProcedure.controller.base";

@swagger.ApiTags("dentalProcedures")
@common.Controller("dentalProcedures")
export class DentalProcedureController extends DentalProcedureControllerBase {
  constructor(protected readonly service: DentalProcedureService) {
    super(service);
  }
}
