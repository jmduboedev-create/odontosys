import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DENTALPROCEDURE_TITLE_FIELD } from "../dentalProcedure/DentalProcedureTitle";
import { HEALTHINSURANCE_TITLE_FIELD } from "../healthInsurance/HealthInsuranceTitle";

export const DentalProcedurePriceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
