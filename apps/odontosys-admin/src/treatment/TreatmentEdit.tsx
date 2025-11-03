import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";

export const TreatmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Appointment Id" source="appointmentId" />
        <NumberInput step={1} label="Clinic Id" source="clinicId" />
        <NumberInput label="Cost" source="cost" />
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Invoice Id" source="invoiceId" />
        <ReferenceArrayInput source="invoiceItem" reference="InvoiceItem">
          <SelectArrayInput
            optionText={InvoiceItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Observations" source="observations" />
        <NumberInput step={1} label="Patient Id" source="patientId" />
        <TextInput label="Procedure Name" source="procedureName" />
        <NumberInput step={1} label="Professional Id" source="professionalId" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PLANNED", value: "PLANNED" },
            { label: "IN_PROGRESS", value: "IN_PROGRESS" },
            { label: "DONE", value: "DONE" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Surface" source="surface" />
        <TextInput label="Tooth" source="tooth" />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
