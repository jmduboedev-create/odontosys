import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput source="invoice.id" reference="Invoice" label="Invoice">
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
        <TextInput label="Method" source="method" />
        <TextInput label="Reference" source="reference" />
      </SimpleForm>
    </Edit>
  );
};
