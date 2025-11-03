import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { CLINIC_TITLE_FIELD } from "./ClinicTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { PROFESSIONAL_TITLE_FIELD } from "../professional/ProfessionalTitle";
import { MEDICALRECORD_TITLE_FIELD } from "../medicalRecord/MedicalRecordTitle";
import { ODONTOGRAM_TITLE_FIELD } from "../odontogram/OdontogramTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ClinicShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Logo Url" source="logoUrl" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="Appointment"
          target="clinicId"
          label="Appointments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Clinic"
              source="clinic.id"
              reference="Clinic"
            >
              <TextField source={CLINIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Time" source="endTime" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Professional"
              source="professional.id"
              reference="Professional"
            >
              <TextField source={PROFESSIONAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Reason" source="reason" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="Status" source="status" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DentalProcedure"
          target="clinicId"
          label="DentalProcedures"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Active" source="active" />
            <TextField label="Base Price" source="basePrice" />
            <ReferenceField
              label="Clinic"
              source="clinic.id"
              reference="Clinic"
            >
              <TextField source={CLINIC_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invoice"
          target="clinicId"
          label="Invoices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Clinic"
              source="clinic.id"
              reference="Clinic"
            >
              <TextField source={CLINIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="date" label="Date" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Total Amount" source="totalAmount" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Patient"
          target="clinicId"
          label="Patients"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Address" source="address" />
            <TextField label="Birth Date" source="birthDate" />
            <ReferenceField
              label="Clinic"
              source="clinic.id"
              reference="Clinic"
            >
              <TextField source={CLINIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Dni" source="dni" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Gender" source="gender" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="Medical Record"
              source="medicalrecord.id"
              reference="MedicalRecord"
            >
              <TextField source={MEDICALRECORD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Odontogram"
              source="odontogram.id"
              reference="Odontogram"
            >
              <TextField source={ODONTOGRAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Phone" source="phone" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Professional"
          target="clinicId"
          label="Professionals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Active" source="active" />
            <ReferenceField
              label="Clinic"
              source="clinic.id"
              reference="Clinic"
            >
              <TextField source={CLINIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="Full Name" source="fullName" />
            <TextField label="ID" source="id" />
            <TextField label="License" source="license" />
            <TextField label="Phone" source="phone" />
            <TextField label="Speciality" source="speciality" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="clinicId" label="Users">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Active" source="active" />
            <ReferenceField
              label="Clinic"
              source="clinic.id"
              reference="Clinic"
            >
              <TextField source={CLINIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Password" source="password" />
            <ReferenceField
              label="Professional"
              source="professional.id"
              reference="Professional"
            >
              <TextField source={PROFESSIONAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Role" source="role" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
