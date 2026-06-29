import { Box } from "@mui/material";
import DynamicForm from "@/components/DynamicForm";
import BrandPanel from "@/components/BrandPanel";
import formConfig from "@/data/formConfig.json";
import { FormConfig } from "@/types";

const config = formConfig as FormConfig;

export default function SignupPage() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <BrandPanel />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          px: { xs: 2, sm: 6 },
          py: 4,
        }}
      >
        <DynamicForm fields={config.data} />
      </Box>
    </Box>
  );
}
