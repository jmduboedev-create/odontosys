import { Module } from "@nestjs/common";
import { AppointmentModule } from "./appointment/appointment.module";
import { AuditLogModule } from "./auditLog/auditLog.module";
import { ClinicModule } from "./clinic/clinic.module";
import { DentalProcedureModule } from "./dentalProcedure/dentalProcedure.module";
import { DentalProcedurePriceModule } from "./dentalProcedurePrice/dentalProcedurePrice.module";
import { HealthInsuranceModule } from "./healthInsurance/healthInsurance.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { InvoiceItemModule } from "./invoiceItem/invoiceItem.module";
import { MedicalRecordModule } from "./medicalRecord/medicalRecord.module";
import { MessageModule } from "./message/message.module";
import { OdontogramModule } from "./odontogram/odontogram.module";
import { OdontogramEntryModule } from "./odontogramEntry/odontogramEntry.module";
import { PatientModule } from "./patient/patient.module";
import { PaymentModule } from "./payment/payment.module";
import { ProfessionalModule } from "./professional/professional.module";
import { RefreshTokenModule } from "./refreshToken/refreshToken.module";
import { TreatmentModule } from "./treatment/treatment.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AppointmentModule,
    AuditLogModule,
    ClinicModule,
    DentalProcedureModule,
    DentalProcedurePriceModule,
    HealthInsuranceModule,
    InvoiceModule,
    InvoiceItemModule,
    MedicalRecordModule,
    MessageModule,
    OdontogramModule,
    OdontogramEntryModule,
    PatientModule,
    PaymentModule,
    ProfessionalModule,
    RefreshTokenModule,
    TreatmentModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
