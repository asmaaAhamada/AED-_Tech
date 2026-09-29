// src/pages/PageStub.jsx
// صفحة مؤقتة عامة لأي قسم لسا ما بنيناه فعلياً
import { Box, Typography } from "@mui/material";

export default function PageStub({ title }) {
  return (
    <Box sx={{ bgcolor: "#0E1B2E", minHeight: "80vh", color: "#F5F7FA", px: 4, py: 10 }}>
      <Typography variant="h4" fontWeight={700}>{title}</Typography>
    </Box>
  );
}