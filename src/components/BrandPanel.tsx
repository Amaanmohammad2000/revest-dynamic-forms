"use client";

import { Box, Typography } from "@mui/material";

const features = [
  { icon: "⚡", text: "Fast & secure authentication" },
  { icon: "🎨", text: "Dynamic, config-driven forms" },
  { icon: "📦", text: "Persistent data with local storage" },
];

export default function BrandPanel() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
        width: 580,
        flexShrink: 0,
        background: "linear-gradient(160deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)",
        px: 6,
        py: 6,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background circles */}
      <Box sx={{
        position: "absolute", top: -80, right: -80,
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(139,92,246,0.25)",
        pointerEvents: "none",
      }} />
      <Box sx={{
        position: "absolute", bottom: -60, left: -60,
        width: 240, height: 240, borderRadius: "50%",
        background: "rgba(99,102,241,0.2)",
        pointerEvents: "none",
      }} />

      {/* Logo */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box sx={{
            width: 40, height: 40, borderRadius: 2,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 20,
          }}>
            ✦
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", color: "white", letterSpacing: 0.5 }}>
            Revest
          </Typography>
        </Box>
      </Box>

      {/* Main copy */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, color: "white", lineHeight: 1.2, mb: 2 }}
        >
          Build something
          <Box component="span" sx={{
            display: "block",
            background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            great today.
          </Box>
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, mb: 4, fontSize: "0.95rem" }}>
          Join thousands of developers building powerful apps with dynamic, config-driven forms.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {features.map((f) => (
            <Box key={f.text} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{
                width: 36, height: 36, borderRadius: 2,
                background: "rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, flexShrink: 0,
              }}>
                {f.icon}
              </Box>
              <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem" }}>
                {f.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography sx={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem" }}>
          © 2025 Revest · All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}
