"use client";

import { Controller, Control, FieldErrors } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { FieldConfig } from "@/types";

interface Props {
  field: FieldConfig;
  control: Control<Record<string, string>>;
  errors: FieldErrors<Record<string, string>>;
}

export default function DynamicSelectField({ field, control, errors }: Props) {
  const fieldKey = String(field.id);
  const options = field.listOfValues1 ?? [];

  return (
    <Controller
      name={fieldKey}
      control={control}
      defaultValue=""
      rules={{
        required: field.required ? `${field.name} is required` : false,
      }}
      render={({ field: rhfField }) => (
        <FormControl
          fullWidth
          variant="outlined"
          error={!!errors[fieldKey]}
          required={field.required}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              background: "#fff",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#6366f1", borderWidth: 2 },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#6366f1" },
          }}
        >
          <InputLabel id={`label-${fieldKey}`}>{field.name}</InputLabel>
          <Select {...rhfField} labelId={`label-${fieldKey}`} label={field.name}>
            {options.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </Select>
          {errors[fieldKey] && (
            <FormHelperText>{errors[fieldKey]?.message as string}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
