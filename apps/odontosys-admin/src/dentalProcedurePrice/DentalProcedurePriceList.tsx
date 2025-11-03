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
import { HEALTHINSURANCE_TITLE_FIELD } from "../healthInsurance/HealthInsuranceTitle";

export const DentalProcedurePriceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DentalProcedurePrices"}
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
        <ReferenceField
          label="Health Insurance"
          source="healthinsurance.id"
          reference="HealthInsurance"
        >
          <TextField source={HEALTHINSURANCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
