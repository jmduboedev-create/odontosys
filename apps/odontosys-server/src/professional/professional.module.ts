import { Module } from "@nestjs/common";
import { ProfessionalModuleBase } from "./base/professional.module.base";
import { ProfessionalService } from "./professional.service";
import { ProfessionalController } from "./professional.controller";
import { ProfessionalResolver } from "./professional.resolver";

@Module({
  imports: [ProfessionalModuleBase],
  controllers: [ProfessionalController],
  providers: [ProfessionalService, ProfessionalResolver],
  exports: [ProfessionalService],
})
export class ProfessionalModule {}
