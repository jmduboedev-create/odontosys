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
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProfessionalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Professionals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Active" source="active" />
        <ReferenceField label="Clinic" source="clinic.id" reference="Clinic">
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
