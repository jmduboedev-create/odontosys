import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ODONTOGRAM_TITLE_FIELD } from "../odontogram/OdontogramTitle";

export const OdontogramEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"OdontogramEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Color" source="color" />
        <TextField label="Condition Type" source="conditionType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <ReferenceField
          label="Odontogram"
          source="odontogram.id"
          reference="Odontogram"
        >
          <TextField source={ODONTOGRAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Surface" source="surface" />
        <TextField label="Tooth" source="tooth" />
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
