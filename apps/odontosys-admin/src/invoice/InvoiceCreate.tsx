import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ClinicTitle } from "../clinic/ClinicTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { PatientTitle } from "../patient/PatientTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="clinic.id" reference="Clinic" label="Clinic">
          <SelectInput optionText={ClinicTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="invoiceItem" reference="InvoiceItem">
          <SelectArrayInput
            optionText={InvoiceItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Notes" source="notes" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="payment" reference="Payment">
          <SelectArrayInput
            optionText={PaymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "PAID", value: "PAID" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="Total Amount" source="totalAmount" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
