import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfessionalService } from "./professional.service";
import { ProfessionalControllerBase } from "./base/professional.controller.base";

@swagger.ApiTags("professionals")
@common.Controller("professionals")
export class ProfessionalController extends ProfessionalControllerBase {
  constructor(protected readonly service: ProfessionalService) {
    super(service);
  }
}
