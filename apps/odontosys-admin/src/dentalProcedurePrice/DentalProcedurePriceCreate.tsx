import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { DentalProcedureTitle } from "../dentalProcedure/DentalProcedureTitle";
import { HealthInsuranceTitle } from "../healthInsurance/HealthInsuranceTitle";

export const DentalProcedurePriceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dentalProcedure.id"
          reference="DentalProcedure"
          label="Dental Procedure"
        >
          <SelectInput optionText={DentalProcedureTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="healthInsurance.id"
          reference="HealthInsurance"
          label="Health Insurance"
        >
          <SelectInput optionText={HealthInsuranceTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
