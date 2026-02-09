"use client";

import { Box, Image, Modal, Stack, Typography } from "@/shared/ui";
import { useReducer } from "react";

type Props = {
  title: string;
  src?: string;
};

export const MiniImagePreview = ({ src, title }: Props) => {
  const [open, toggle] = useReducer((state) => !state, false);

  return (
    <>
      {src && (
        <Stack gap={1} flexGrow={1}>
          <Typography variant="xs" fontWeight="medium" color="text.tertiary">
            {title}
          </Typography>
          <Box onClick={toggle} sx={{ position: "relative", minHeight: 72, borderRadius: 1.5, overflow: "hidden" }}>
            <Image src={src} alt="preview" style={{ objectFit: "cover" }} fill />
          </Box>
        </Stack>
      )}
      <Modal title={title} open={open} onClose={toggle}>
        {src && (
          <Stack sx={{ position: "relative" }} minHeight={300}>
            <Image src={src} alt="preview" style={{ objectFit: "contain" }} fill />
          </Stack>
        )}
      </Modal>
    </>
  );
};
