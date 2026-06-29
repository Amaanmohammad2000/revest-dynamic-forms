"use client";

import { Controller, Control, FieldErrors } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { FieldConfig } from "@/types";

interface Props {
  field: FieldConfig;
  control: Control<Record<string, string>>;
  errors: FieldErrors<Record<string, string>>;
}

export default function DynamicRadioField({ field, control, errors }: Props) {
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
        <FormControl error={!!errors[fieldKey]} required={field.required}>
          <FormLabel
            sx={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#374151",
              "&.Mui-focused": { color: "#6366f1" },
            }}
          >
            {field.name}
          </FormLabel>
          <RadioGroup {...rhfField} row sx={{ mt: 0.5 }}>
            {options.map((opt) => (
              <FormControlLabel
                key={opt}
                value={opt}
                control={<Radio size="small" sx={{ "&.Mui-checked": { color: "#6366f1" } }} />}
                label={opt}
                sx={{ "& .MuiFormControlLabel-label": { fontSize: "0.9rem" } }}
              />
            ))}
          </RadioGroup>
          {errors[fieldKey] && (
            <FormHelperText>{errors[fieldKey]?.message as string}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
