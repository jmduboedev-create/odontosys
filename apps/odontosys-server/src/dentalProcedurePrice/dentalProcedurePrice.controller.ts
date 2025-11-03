import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DentalProcedurePriceService } from "./dentalProcedurePrice.service";
import { DentalProcedurePriceControllerBase } from "./base/dentalProcedurePrice.controller.base";

@swagger.ApiTags("dentalProcedurePrices")
@common.Controller("dentalProcedurePrices")
export class DentalProcedurePriceController extends DentalProcedurePriceControllerBase {
  constructor(protected readonly service: DentalProcedurePriceService) {
    super(service);
  }
}
