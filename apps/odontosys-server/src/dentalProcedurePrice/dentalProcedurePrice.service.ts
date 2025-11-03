import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DentalProcedurePriceServiceBase } from "./base/dentalProcedurePrice.service.base";

@Injectable()
export class DentalProcedurePriceService extends DentalProcedurePriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
