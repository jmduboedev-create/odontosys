import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DENTALPROCEDURE_TITLE_FIELD } from "../dentalProcedure/DentalProcedureTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { TREATMENT_TITLE_FIELD } from "../treatment/TreatmentTitle";

export const InvoiceItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"InvoiceItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Invoice" source="invoice.id" reference="Invoice">
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
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
