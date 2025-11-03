import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfessionalServiceBase } from "./base/professional.service.base";

@Injectable()
export class ProfessionalService extends ProfessionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
