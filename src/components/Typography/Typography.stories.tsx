// src/stories/Typography.stories.tsx
import React from "react";
import { Typography } from "../../shared/ui/typography";

export default {
  title: "Shared/Typography",
  component: Typography,
};

export const Small = () => (
  <Typography variant="caption">Small Text</Typography>
);

export const BaseBold = () => (
  <Typography variant="body2" fontWeight="xBold">
    Base xBold
  </Typography>
);
