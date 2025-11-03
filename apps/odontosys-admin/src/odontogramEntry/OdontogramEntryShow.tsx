import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ODONTOGRAM_TITLE_FIELD } from "../odontogram/OdontogramTitle";

export const OdontogramEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Updated At" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
