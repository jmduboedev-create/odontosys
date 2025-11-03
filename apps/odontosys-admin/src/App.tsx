import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { ClinicList } from "./clinic/ClinicList";
import { ClinicCreate } from "./clinic/ClinicCreate";
import { ClinicEdit } from "./clinic/ClinicEdit";
import { ClinicShow } from "./clinic/ClinicShow";
import { DentalProcedureList } from "./dentalProcedure/DentalProcedureList";
import { DentalProcedureCreate } from "./dentalProcedure/DentalProcedureCreate";
import { DentalProcedureEdit } from "./dentalProcedure/DentalProcedureEdit";
import { DentalProcedureShow } from "./dentalProcedure/DentalProcedureShow";
import { DentalProcedurePriceList } from "./dentalProcedurePrice/DentalProcedurePriceList";
import { DentalProcedurePriceCreate } from "./dentalProcedurePrice/DentalProcedurePriceCreate";
import { DentalProcedurePriceEdit } from "./dentalProcedurePrice/DentalProcedurePriceEdit";
import { DentalProcedurePriceShow } from "./dentalProcedurePrice/DentalProcedurePriceShow";
import { HealthInsuranceList } from "./healthInsurance/HealthInsuranceList";
import { HealthInsuranceCreate } from "./healthInsurance/HealthInsuranceCreate";
import { HealthInsuranceEdit } from "./healthInsurance/HealthInsuranceEdit";
import { HealthInsuranceShow } from "./healthInsurance/HealthInsuranceShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { InvoiceItemList } from "./invoiceItem/InvoiceItemList";
import { InvoiceItemCreate } from "./invoiceItem/InvoiceItemCreate";
import { InvoiceItemEdit } from "./invoiceItem/InvoiceItemEdit";
import { InvoiceItemShow } from "./invoiceItem/InvoiceItemShow";
import { MedicalRecordList } from "./medicalRecord/MedicalRecordList";
import { MedicalRecordCreate } from "./medicalRecord/MedicalRecordCreate";
import { MedicalRecordEdit } from "./medicalRecord/MedicalRecordEdit";
import { MedicalRecordShow } from "./medicalRecord/MedicalRecordShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { OdontogramList } from "./odontogram/OdontogramList";
import { OdontogramCreate } from "./odontogram/OdontogramCreate";
import { OdontogramEdit } from "./odontogram/OdontogramEdit";
import { OdontogramShow } from "./odontogram/OdontogramShow";
import { OdontogramEntryList } from "./odontogramEntry/OdontogramEntryList";
import { OdontogramEntryCreate } from "./odontogramEntry/OdontogramEntryCreate";
import { OdontogramEntryEdit } from "./odontogramEntry/OdontogramEntryEdit";
import { OdontogramEntryShow } from "./odontogramEntry/OdontogramEntryShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { ProfessionalList } from "./professional/ProfessionalList";
import { ProfessionalCreate } from "./professional/ProfessionalCreate";
import { ProfessionalEdit } from "./professional/ProfessionalEdit";
import { ProfessionalShow } from "./professional/ProfessionalShow";
import { RefreshTokenList } from "./refreshToken/RefreshTokenList";
import { RefreshTokenCreate } from "./refreshToken/RefreshTokenCreate";
import { RefreshTokenEdit } from "./refreshToken/RefreshTokenEdit";
import { RefreshTokenShow } from "./refreshToken/RefreshTokenShow";
import { TreatmentList } from "./treatment/TreatmentList";
import { TreatmentCreate } from "./treatment/TreatmentCreate";
import { TreatmentEdit } from "./treatment/TreatmentEdit";
import { TreatmentShow } from "./treatment/TreatmentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Odontosys"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
        <Resource
          name="Clinic"
          list={ClinicList}
          edit={ClinicEdit}
          create={ClinicCreate}
          show={ClinicShow}
        />
        <Resource
          name="DentalProcedure"
          list={DentalProcedureList}
          edit={DentalProcedureEdit}
          create={DentalProcedureCreate}
          show={DentalProcedureShow}
        />
        <Resource
          name="DentalProcedurePrice"
          list={DentalProcedurePriceList}
          edit={DentalProcedurePriceEdit}
          create={DentalProcedurePriceCreate}
          show={DentalProcedurePriceShow}
        />
        <Resource
          name="HealthInsurance"
          list={HealthInsuranceList}
          edit={HealthInsuranceEdit}
          create={HealthInsuranceCreate}
          show={HealthInsuranceShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="InvoiceItem"
          list={InvoiceItemList}
          edit={InvoiceItemEdit}
          create={InvoiceItemCreate}
          show={InvoiceItemShow}
        />
        <Resource
          name="MedicalRecord"
          list={MedicalRecordList}
          edit={MedicalRecordEdit}
          create={MedicalRecordCreate}
          show={MedicalRecordShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Odontogram"
          list={OdontogramList}
          edit={OdontogramEdit}
          create={OdontogramCreate}
          show={OdontogramShow}
        />
        <Resource
          name="OdontogramEntry"
          list={OdontogramEntryList}
          edit={OdontogramEntryEdit}
          create={OdontogramEntryCreate}
          show={OdontogramEntryShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Professional"
          list={ProfessionalList}
          edit={ProfessionalEdit}
          create={ProfessionalCreate}
          show={ProfessionalShow}
        />
        <Resource
          name="RefreshToken"
          list={RefreshTokenList}
          edit={RefreshTokenEdit}
          create={RefreshTokenCreate}
          show={RefreshTokenShow}
        />
        <Resource
          name="Treatment"
          list={TreatmentList}
          edit={TreatmentEdit}
          create={TreatmentCreate}
          show={TreatmentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
