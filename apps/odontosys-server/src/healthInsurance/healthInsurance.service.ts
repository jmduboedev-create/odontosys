import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthInsuranceServiceBase } from "./base/healthInsurance.service.base";

@Injectable()
export class HealthInsuranceService extends HealthInsuranceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
