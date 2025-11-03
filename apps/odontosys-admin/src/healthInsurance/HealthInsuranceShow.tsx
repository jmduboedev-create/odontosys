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
} from "react-admin";

import { DENTALPROCEDURE_TITLE_FIELD } from "../dentalProcedure/DentalProcedureTitle";
import { HEALTHINSURANCE_TITLE_FIELD } from "./HealthInsuranceTitle";

export const HealthInsuranceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <TextField label="Contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Observations" source="observations" />
        <TextField label="Phone" source="phone" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="DentalProcedurePrice"
          target="healthInsuranceId"
          label="DentalProcedurePrices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Dental Procedure"
              source="dentalprocedure.id"
              reference="DentalProcedure"
            >
              <TextField source={DENTALPROCEDURE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Health Insurance"
              source="healthinsurance.id"
              reference="HealthInsurance"
            >
              <TextField source={HEALTHINSURANCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
