import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OdontogramEntryServiceBase } from "./base/odontogramEntry.service.base";

@Injectable()
export class OdontogramEntryService extends OdontogramEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
