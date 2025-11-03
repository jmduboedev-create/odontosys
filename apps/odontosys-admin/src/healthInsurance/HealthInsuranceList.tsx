import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HealthInsuranceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"HealthInsurances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Code" source="code" />
        <TextField label="Contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Observations" source="observations" />
        <TextField label="Phone" source="phone" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
