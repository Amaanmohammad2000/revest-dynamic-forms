# Revest Dynamic Forms

A signup form built with Next.js, TypeScript, Material UI, and React Hook Form. Form fields are driven by a JSON config, so changing `fieldType` automatically switches the rendered component (text input, dropdown, or radio buttons).

## Getting Started

Make sure you have Node.js 18+ installed.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Changing Field Types

Edit `src/data/formConfig.json` and update `"fieldType"` for any field:

- `"TEXT"` → renders a text or email input
- `"LIST"` → renders a dropdown select
- `"RADIO"` → renders a radio button group

For example, to change Gender from a dropdown to radio buttons:

```json
{
  "id": 6,
  "name": "Gender",
  "fieldType": "RADIO",
  "required": true,
  "listOfValues1": ["Male", "Female", "Others"]
}
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Material UI v9
- React Hook Form
- Local Storage for persisting submissions

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── DynamicForm.tsx
│   ├── ThemeRegistry.tsx
│   └── fields/
│       ├── DynamicField.tsx
│       ├── DynamicTextField.tsx
│       ├── DynamicSelectField.tsx
│       └── DynamicRadioField.tsx
├── data/
│   └── formConfig.json
├── types/
│   └── index.ts
└── utils/
    └── storage.ts
```
