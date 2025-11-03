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
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { TreatmentTitle } from "../treatment/TreatmentTitle";

export const InvoiceItemCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput source="invoice.id" reference="Invoice" label="Invoice">
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="Total" source="total" />
        <ReferenceInput
          source="treatment.id"
          reference="Treatment"
          label="Treatment"
        >
          <SelectInput optionText={TreatmentTitle} />
        </ReferenceInput>
        <NumberInput label="Unit Price" source="unitPrice" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
