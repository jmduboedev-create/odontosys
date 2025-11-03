import { Module } from "@nestjs/common";
import { DentalProcedureModuleBase } from "./base/dentalProcedure.module.base";
import { DentalProcedureService } from "./dentalProcedure.service";
import { DentalProcedureController } from "./dentalProcedure.controller";
import { DentalProcedureResolver } from "./dentalProcedure.resolver";

@Module({
  imports: [DentalProcedureModuleBase],
  controllers: [DentalProcedureController],
  providers: [DentalProcedureService, DentalProcedureResolver],
  exports: [DentalProcedureService],
})
export class DentalProcedureModule {}
