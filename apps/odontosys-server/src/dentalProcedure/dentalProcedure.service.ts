import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DentalProcedureServiceBase } from "./base/dentalProcedure.service.base";

@Injectable()
export class DentalProcedureService extends DentalProcedureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
