import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HealthInsuranceService } from "./healthInsurance.service";
import { HealthInsuranceControllerBase } from "./base/healthInsurance.controller.base";

@swagger.ApiTags("healthInsurances")
@common.Controller("healthInsurances")
export class HealthInsuranceController extends HealthInsuranceControllerBase {
  constructor(protected readonly service: HealthInsuranceService) {
    super(service);
  }
}
