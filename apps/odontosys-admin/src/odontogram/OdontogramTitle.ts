import { Odontogram as TOdontogram } from "../api/odontogram/Odontogram";

export const ODONTOGRAM_TITLE_FIELD = "id";

export const OdontogramTitle = (record: TOdontogram): string => {
  return record.id?.toString() || String(record.id);
};
