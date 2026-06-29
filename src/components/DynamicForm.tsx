"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Stack,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { FieldConfig } from "@/types";
import { saveSubmission, isEmailTaken } from "@/utils/storage";
import DynamicField from "./fields/DynamicField";

interface Props {
  fields: FieldConfig[];
}

export default function DynamicForm({ fields }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Record<string, string>>({ mode: "onTouched" });

  const clearEmailError = () => { if (emailError) setEmailError(""); };

  const onSubmit = (data: Record<string, string>) => {
    const emailField = fields.find((f) => f.name.toLowerCase() === "email");
    if (emailField && isEmailTaken(data[String(emailField.id)])) {
      setEmailError("This email is already registered.");
      return;
    }
    setEmailError("");
    setLoading(true);
    setTimeout(() => {
      saveSubmission({
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString(),
        fields: fields.map((f) => ({ label: f.name, value: data[String(f.id)] })),
      });
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <Box sx={{ width: "100%", maxWidth: 400, textAlign: "center" }}>
        <Box sx={{
          width: 72, height: 72, borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 32, color: "white", mx: "auto", mb: 3,
          boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
        }}>
          ✓
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          You&apos;re all set!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Your account has been created successfully.
        </Typography>
        <Button
          onClick={() => { reset(); setSubmitted(false); }}
          variant="outlined"
          sx={{
            borderRadius: 2, textTransform: "none", px: 4,
            borderColor: "#6366f1", color: "#6366f1",
            "&:hover": { background: "#f5f3ff", borderColor: "#4f46e5" },
          }}
        >
          Create another account
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", maxWidth: 400 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#111", mb: 0.5 }}>
          Create account
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fill in your details below to get started
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate onChange={clearEmailError}>
        <Stack spacing={2.5}>
          {fields.map((field) => (
            <DynamicField
              key={field.id}
              field={field}
              control={control}
              errors={errors}
            />
          ))}

          {emailError && (
            <Alert severity="error" sx={{ borderRadius: 2 }}>
              {emailError}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={loading}
            disableElevation
            sx={{
              mt: 1,
              py: 1.5,
              borderRadius: 2,
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              fontWeight: 600,
              fontSize: "0.95rem",
              textTransform: "none",
              letterSpacing: 0.2,
              "&:hover": {
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              },
            }}
          >
            {loading ? <CircularProgress size={22} color="inherit" /> : "Create account"}
          </Button>

          <Typography variant="caption" color="text.disabled" sx={{ textAlign: "center", display: "block" }}>
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </Typography>
        </Stack>
      </form>
    </Box>
  );
}
