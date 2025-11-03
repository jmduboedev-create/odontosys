import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DENTALPROCEDURE_TITLE_FIELD } from "../dentalProcedure/DentalProcedureTitle";
import { INVOICE_TITLE_FIELD } from "./InvoiceTitle";
import { TREATMENT_TITLE_FIELD } from "../treatment/TreatmentTitle";
import { CLINIC_TITLE_FIELD } from "../clinic/ClinicTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const InvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Clinic" source="clinic.id" reference="Clinic">
          <TextField source={CLINIC_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <TextField label="Total Amount" source="totalAmount" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="InvoiceItem"
          target="invoiceId"
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
        <ReferenceManyField
          reference="Payment"
          target="invoiceId"
          label="Payments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="date" label="Date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Method" source="method" />
            <TextField label="Reference" source="reference" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
