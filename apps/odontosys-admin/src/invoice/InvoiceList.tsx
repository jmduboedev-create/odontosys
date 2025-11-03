import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLINIC_TITLE_FIELD } from "../clinic/ClinicTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const InvoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Invoices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Clinic" source="clinic.id" reference="Clinic">
          <TextField source={CLINIC_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <TextField label="Total Amount" source="totalAmount" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
