import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { DentalProcedurePriceTitle } from "../dentalProcedurePrice/DentalProcedurePriceTitle";

export const HealthInsuranceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Contact" source="contact" />
        <ReferenceArrayInput
          source="dentalProcedurePrice"
          reference="DentalProcedurePrice"
        >
          <SelectArrayInput
            optionText={DentalProcedurePriceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Observations" source="observations" />
        <TextInput label="Phone" source="phone" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
