import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ClinicTitle } from "../clinic/ClinicTitle";
import { DentalProcedurePriceTitle } from "../dentalProcedurePrice/DentalProcedurePriceTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";

export const DentalProcedureCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Active" source="active" />
        <NumberInput label="Base Price" source="basePrice" />
        <ReferenceInput source="clinic.id" reference="Clinic" label="Clinic">
          <SelectInput optionText={ClinicTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
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
        <TextInput label="Description" source="description" />
        <ReferenceArrayInput source="invoiceItem" reference="InvoiceItem">
          <SelectArrayInput
            optionText={InvoiceItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
