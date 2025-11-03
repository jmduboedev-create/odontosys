import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CLINIC_TITLE_FIELD } from "../clinic/ClinicTitle";
import { PATIENT_TITLE_FIELD } from "./PatientTitle";
import { PROFESSIONAL_TITLE_FIELD } from "../professional/ProfessionalTitle";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { MEDICALRECORD_TITLE_FIELD } from "../medicalRecord/MedicalRecordTitle";
import { ODONTOGRAM_TITLE_FIELD } from "../odontogram/OdontogramTitle";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Birth Date" source="birthDate" />
        <ReferenceField label="Clinic" source="clinic.id" reference="Clinic">
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
        <ReferenceManyField
          reference="Appointment"
          target="patientId"
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
          reference="Invoice"
          target="patientId"
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
          reference="Message"
          target="patientId"
          label="Messages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Appointment"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Channel" source="channel" />
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Error Field" source="errorField" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sent At" source="sentAt" />
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
