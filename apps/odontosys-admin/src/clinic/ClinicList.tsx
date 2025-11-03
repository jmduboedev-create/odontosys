import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClinicList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Clinics"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Logo Url" source="logoUrl" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
