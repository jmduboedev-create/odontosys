import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DENTALPROCEDURE_TITLE_FIELD } from "./DentalProcedureTitle";
import { HEALTHINSURANCE_TITLE_FIELD } from "../healthInsurance/HealthInsuranceTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { TREATMENT_TITLE_FIELD } from "../treatment/TreatmentTitle";
import { CLINIC_TITLE_FIELD } from "../clinic/ClinicTitle";

export const DentalProcedureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active" source="active" />
        <TextField label="Base Price" source="basePrice" />
        <ReferenceField label="Clinic" source="clinic.id" reference="Clinic">
          <TextField source={CLINIC_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="DentalProcedurePrice"
          target="dentalProcedureId"
          label="DentalProcedurePrices"
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
            <ReferenceField
              label="Health Insurance"
              source="healthinsurance.id"
              reference="HealthInsurance"
            >
              <TextField source={HEALTHINSURANCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InvoiceItem"
          target="dentalProcedureId"
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
