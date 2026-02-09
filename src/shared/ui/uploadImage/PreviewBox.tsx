"use client";

import { DeleteIcon, DownloadIcon, PdfIcon, ZoomOutMapIcon } from "@/icons";
import { isPdf } from "@/utils";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import { Box } from "../box";
import { Button } from "../button";
import { IconButton } from "../icon-button";
import { Image } from "../ImagePreview";
import { Modal } from "../modal";
import { Stack } from "../stack";
import { SvgIcon } from "../svg-icon";
import { Typography } from "../typography";

interface PreviewBoxProps {
  title: string;
  onDelete: () => void;
  value: File | string;
  disabled?: boolean;
}

export const PreviewBox = ({ title, onDelete, value, disabled }: PreviewBoxProps) => {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [open, toggle] = useReducer((state) => !state, false);
  const handlePreview = () => {
    if (isValuePdf) {
      window.open(url, "_blank");
    } else {
      toggle();
    }
  };

  const isValuePdf = isPdf(value);
  const fileName = value instanceof File ? value.name : undefined;

  useEffect(() => {
    if (value === undefined) {
      setUrl(undefined);
      return;
    }
    if (value instanceof File) {
      setUrl(URL.createObjectURL(value));
      return;
    }
  }, [value]);

  return (
    <>
      <Typography variant="sm" color="text.secondary" fontWeight="xBold">
        تصویر {title}
      </Typography>
      <Box
        position="relative"
        width="100%"
        height={120}
        borderRadius={2}
        overflow="hidden"
        bgcolor="Background.default"
      >
        {isValuePdf ? (
          <Stack alignItems="center" justifyContent="center" height={1} gap={1}>
            <SvgIcon sx={{ fontSize: 64 }}>
              <PdfIcon />
            </SvgIcon>
            {fileName && (
              <Typography variant="sm" color="text.secondary" fontWeight="xBold">
                {fileName}
              </Typography>
            )}
          </Stack>
        ) : (
          <Image src={url} alt="uploaded-image" style={{ borderRadius: "8px", objectFit: "cover" }} fill />
        )}
        <Box position="absolute" top={0} left={0} right={0} bottom={0} bgcolor="grey.600" sx={{ opacity: "0.7" }} />
        {!disabled && (
          <IconButton
            sx={{
              position: "absolute" as const,
              bottom: 8,
              left: 8,
              color: "white",
            }}
            onClick={onDelete}
            aria-label="حذف فایل"
          >
            <SvgIcon>
              <DeleteIcon />
            </SvgIcon>
          </IconButton>
        )}
        <IconButton
          sx={{
            position: "absolute" as const,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
          onClick={handlePreview}
          aria-label="پیش‌نمایش تصویر"
        >
          <SvgIcon>{isValuePdf ? <DownloadIcon /> : <ZoomOutMapIcon />}</SvgIcon>
        </IconButton>
        <Modal onClose={toggle} open={open} title={title}>
          {url && (
            <Stack gap={2}>
              <Button variant="contained" size="small" sx={{ width: 4 }} color="primary">
                <Link href={url} download target="_blank">
                  <SvgIcon>
                    <DownloadIcon />
                  </SvgIcon>
                </Link>
              </Button>
              <Stack justifyContent="center" alignItems="center">
                {isValuePdf ? (
                  <Stack alignItems="center" justifyContent="center" height={1} gap={1}>
                    <SvgIcon sx={{ fontSize: 64 }}>
                      <PdfIcon />
                    </SvgIcon>
                    {fileName && (
                      <Typography variant="sm" color="text.secondary" fontWeight="xBold">
                        {fileName}
                      </Typography>
                    )}
                  </Stack>
                ) : (
                  <Image
                    src={url}
                    alt="modal-view"
                    width={320}
                    height={240}
                    style={{ borderRadius: "8px", objectFit: "cover" as const }}
                  />
                )}
              </Stack>
            </Stack>
          )}
        </Modal>
      </Box>
    </>
  );
};
