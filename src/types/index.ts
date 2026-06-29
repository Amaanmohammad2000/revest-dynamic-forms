export type FieldType = "TEXT" | "LIST" | "RADIO";

export interface FieldConfig {
  id: number;
  name: string;
  fieldType: FieldType;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  required: boolean;
  listOfValues1?: string[];
}

export interface FormConfig {
  data: FieldConfig[];
}

export interface SubmissionField {
  label: string;
  value: string;
}

export interface FormSubmission {
  id: string;
  submittedAt: string;
  fields: SubmissionField[];
}
