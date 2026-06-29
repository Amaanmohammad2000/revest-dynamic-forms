"use client";

import { Control, FieldErrors } from "react-hook-form";
import { FieldConfig } from "@/types";
import DynamicTextField from "./DynamicTextField";
import DynamicSelectField from "./DynamicSelectField";
import DynamicRadioField from "./DynamicRadioField";

interface Props {
  field: FieldConfig;
  control: Control<Record<string, string>>;
  errors: FieldErrors<Record<string, string>>;
}

export default function DynamicField({ field, control, errors }: Props) {
  switch (field.fieldType) {
    case "TEXT":
      return <DynamicTextField field={field} control={control} errors={errors} />;
    case "LIST":
      return <DynamicSelectField field={field} control={control} errors={errors} />;
    case "RADIO":
      return <DynamicRadioField field={field} control={control} errors={errors} />;
    default:
      return null;
  }
}
