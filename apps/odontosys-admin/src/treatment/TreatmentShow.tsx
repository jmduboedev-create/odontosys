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
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { TREATMENT_TITLE_FIELD } from "./TreatmentTitle";

export const TreatmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Appointment Id" source="appointmentId" />
        <TextField label="Clinic Id" source="clinicId" />
        <TextField label="Cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Invoice Id" source="invoiceId" />
        <TextField label="Observations" source="observations" />
        <TextField label="Patient Id" source="patientId" />
        <TextField label="Procedure Name" source="procedureName" />
        <TextField label="Professional Id" source="professionalId" />
        <TextField label="Status" source="status" />
        <TextField label="Surface" source="surface" />
        <TextField label="Tooth" source="tooth" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="InvoiceItem"
          target="treatmentId"
          label="InvoiceItems"
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
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Total" source="total" />
            <ReferenceField
              label="Treatment"
              source="treatment.id"
              reference="Treatment"
            >
              <TextField source={TREATMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Unit Price" source="unitPrice" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
