import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ClinicTitle } from "../clinic/ClinicTitle";
import { MessageTitle } from "../message/MessageTitle";
import { PatientTitle } from "../patient/PatientTitle";
import { ProfessionalTitle } from "../professional/ProfessionalTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="clinic.id" reference="Clinic" label="Clinic">
          <SelectInput optionText={ClinicTitle} />
        </ReferenceInput>
        <DateTimeInput label="End Time" source="endTime" />
        <ReferenceArrayInput source="message" reference="Message">
          <SelectArrayInput
            optionText={MessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Notes" source="notes" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="professional.id"
          reference="Professional"
          label="Professional"
        >
          <SelectInput optionText={ProfessionalTitle} />
        </ReferenceInput>
        <TextInput label="Reason" source="reason" />
        <DateTimeInput label="Start Time" source="startTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "SCHEDULED", value: "SCHEDULED" },
            { label: "CONFIRMED", value: "CONFIRMED" },
            { label: "CANCELLED", value: "CANCELLED" },
            { label: "COMPLETED", value: "COMPLETED" },
            { label: "NO_SHOW", value: "NO_SHOW" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
