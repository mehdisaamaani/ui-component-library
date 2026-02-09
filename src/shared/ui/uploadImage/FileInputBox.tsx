"use client";

import { UploadIcon } from "@/icons";
import React from "react";
import { Stack } from "../stack";
import { SvgIcon } from "../svg-icon";
import { Typography } from "../typography";

interface FileInputBoxProps {
  title: string;
  onFile: (file: File) => void;
  disabled?: boolean;
}

export const FileInputBox = ({ title, onFile, disabled }: FileInputBoxProps) => (
  <>
    <Typography variant="sm" color="text.secondary" fontWeight="xBold">
      تصویر {title}
    </Typography>
    <Stack
      component="label"
      alignItems="center"
      justifyContent="center"
      height={120}
      border="2px dashed"
      borderColor="grey.50"
      borderRadius={2}
      bgcolor={disabled ? "grey.50" : "background.default"}
      gap={1}
      sx={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <SvgIcon component={UploadIcon} color="disabled" />
      <Typography variant="xs" color="textSecondary">
        {title}
      </Typography>
      <input
        disabled={disabled}
        type="file"
        accept="image/jpeg, image/png, image/webp, application/pdf"
        style={{ display: "none" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e && e.target && e.target.files && e.target.files.length > 0) {
            onFile(e.target.files[0]);
          }
        }}
        aria-label="انتخاب فایل"
      />
    </Stack>
  </>
);
