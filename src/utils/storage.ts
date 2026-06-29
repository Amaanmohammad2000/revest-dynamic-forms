import { FormSubmission } from "@/types";

const STORAGE_KEY = "revest_submissions";

export function getSubmissions(): FormSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isEmailTaken(email: string): boolean {
  return getSubmissions().some((s) =>
    s.fields.some(
      (f) => f.label.toLowerCase() === "email" && f.value.toLowerCase() === email.toLowerCase()
    )
  );
}

export function saveSubmission(submission: FormSubmission): void {
  const existing = getSubmissions();
  existing.unshift(submission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}
