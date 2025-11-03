import { Module } from "@nestjs/common";
import { HealthInsuranceModuleBase } from "./base/healthInsurance.module.base";
import { HealthInsuranceService } from "./healthInsurance.service";
import { HealthInsuranceController } from "./healthInsurance.controller";
import { HealthInsuranceResolver } from "./healthInsurance.resolver";

@Module({
  imports: [HealthInsuranceModuleBase],
  controllers: [HealthInsuranceController],
  providers: [HealthInsuranceService, HealthInsuranceResolver],
  exports: [HealthInsuranceService],
})
export class HealthInsuranceModule {}
