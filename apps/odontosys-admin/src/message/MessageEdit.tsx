import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { PatientTitle } from "../patient/PatientTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointment.id"
          reference="Appointment"
          label="Appointment"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <SelectInput
          source="channel"
          label="Channel"
          choices={[
            { label: "WHATSAPP", value: "WHATSAPP" },
            { label: "EMAIL", value: "EMAIL" },
            { label: "SMS", value: "SMS" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Content" source="content" />
        <TextInput label="Error Field" source="errorField" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <DateTimeInput label="Sent At" source="sentAt" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "SENT", value: "SENT" },
            { label: "FAILED", value: "FAILED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
