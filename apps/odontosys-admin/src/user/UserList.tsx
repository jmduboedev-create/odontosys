import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CLINIC_TITLE_FIELD } from "../clinic/ClinicTitle";
import { PROFESSIONAL_TITLE_FIELD } from "../professional/ProfessionalTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Active" source="active" />
        <ReferenceField label="Clinic" source="clinic.id" reference="Clinic">
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
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
