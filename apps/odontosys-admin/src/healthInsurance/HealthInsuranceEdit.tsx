import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { DentalProcedurePriceTitle } from "../dentalProcedurePrice/DentalProcedurePriceTitle";

export const HealthInsuranceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
