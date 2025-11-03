import { Module } from "@nestjs/common";
import { DentalProcedurePriceModuleBase } from "./base/dentalProcedurePrice.module.base";
import { DentalProcedurePriceService } from "./dentalProcedurePrice.service";
import { DentalProcedurePriceController } from "./dentalProcedurePrice.controller";
import { DentalProcedurePriceResolver } from "./dentalProcedurePrice.resolver";

@Module({
  imports: [DentalProcedurePriceModuleBase],
  controllers: [DentalProcedurePriceController],
  providers: [DentalProcedurePriceService, DentalProcedurePriceResolver],
  exports: [DentalProcedurePriceService],
})
export class DentalProcedurePriceModule {}
