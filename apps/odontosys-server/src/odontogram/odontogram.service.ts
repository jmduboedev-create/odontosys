import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OdontogramServiceBase } from "./base/odontogram.service.base";

@Injectable()
export class OdontogramService extends OdontogramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
