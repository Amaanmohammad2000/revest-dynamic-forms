"use client";

import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import { FieldConfig } from "@/types";

interface Props {
  field: FieldConfig;
  control: Control<Record<string, string>>;
  errors: FieldErrors<Record<string, string>>;
}

export default function DynamicTextField({ field, control, errors }: Props) {
  const fieldKey = String(field.id);
  const isEmail = field.name.toLowerCase().includes("email");

  return (
    <Controller
      name={fieldKey}
      control={control}
      defaultValue=""
      rules={{
        required: field.required ? `${field.name} is required` : false,
        minLength: field.minLength
          ? { value: field.minLength, message: `Minimum ${field.minLength} characters` }
          : undefined,
        maxLength: field.maxLength
          ? { value: field.maxLength, message: `Maximum ${field.maxLength} characters` }
          : undefined,
        ...(isEmail && {
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        }),
      }}
      render={({ field: rhfField }) => (
        <TextField
          {...rhfField}
          label={field.name}
          type={isEmail ? "email" : "text"}
          required={field.required}
          fullWidth
          variant="outlined"
          size="medium"
          error={!!errors[fieldKey]}
          helperText={errors[fieldKey]?.message as string | undefined}
          placeholder={field.defaultValue}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              background: "#fff",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#6366f1", borderWidth: 2 },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#6366f1" },
          }}
        />
      )}
    />
  );
}
