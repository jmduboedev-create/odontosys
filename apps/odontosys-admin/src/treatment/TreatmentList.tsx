import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TreatmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Treatments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Appointment Id" source="appointmentId" />
        <TextField label="Clinic Id" source="clinicId" />
        <TextField label="Cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Invoice Id" source="invoiceId" />
        <TextField label="Observations" source="observations" />
        <TextField label="Patient Id" source="patientId" />
        <TextField label="Procedure Name" source="procedureName" />
        <TextField label="Professional Id" source="professionalId" />
        <TextField label="Status" source="status" />
        <TextField label="Surface" source="surface" />
        <TextField label="Tooth" source="tooth" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
