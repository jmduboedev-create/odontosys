import { Module } from "@nestjs/common";
import { OdontogramEntryModuleBase } from "./base/odontogramEntry.module.base";
import { OdontogramEntryService } from "./odontogramEntry.service";
import { OdontogramEntryController } from "./odontogramEntry.controller";
import { OdontogramEntryResolver } from "./odontogramEntry.resolver";

@Module({
  imports: [OdontogramEntryModuleBase],
  controllers: [OdontogramEntryController],
  providers: [OdontogramEntryService, OdontogramEntryResolver],
  exports: [OdontogramEntryService],
})
export class OdontogramEntryModule {}
