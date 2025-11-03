import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLINIC_TITLE_FIELD } from "../clinic/ClinicTitle";
import { MEDICALRECORD_TITLE_FIELD } from "../medicalRecord/MedicalRecordTitle";
import { ODONTOGRAM_TITLE_FIELD } from "../odontogram/OdontogramTitle";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
