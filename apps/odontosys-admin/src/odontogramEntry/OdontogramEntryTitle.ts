import { OdontogramEntry as TOdontogramEntry } from "../api/odontogramEntry/OdontogramEntry";

export const ODONTOGRAMENTRY_TITLE_FIELD = "color";

export const OdontogramEntryTitle = (record: TOdontogramEntry): string => {
  return record.color?.toString() || String(record.id);
};
