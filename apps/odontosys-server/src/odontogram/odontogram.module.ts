import { Module } from "@nestjs/common";
import { OdontogramModuleBase } from "./base/odontogram.module.base";
import { OdontogramService } from "./odontogram.service";
import { OdontogramController } from "./odontogram.controller";
import { OdontogramResolver } from "./odontogram.resolver";

@Module({
  imports: [OdontogramModuleBase],
  controllers: [OdontogramController],
  providers: [OdontogramService, OdontogramResolver],
  exports: [OdontogramService],
})
export class OdontogramModule {}
