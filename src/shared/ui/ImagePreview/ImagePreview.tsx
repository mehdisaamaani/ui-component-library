"use client";

import { DownloadIcon, ZoomOutMapIcon } from "@/icons";
import Link from "next/link";
import { useReducer } from "react";
import { Box } from "../box";
import { Dialog } from "../dialog";
import { IconButton } from "../icon-button";
import { Stack } from "../stack";
import { SvgIcon } from "../svg-icon";
import { Tooltip } from "../tooltip";
import { Typography } from "../typography";
import { Image } from "./Image";

type Props = {
  src: string;
};

export const ImagePreview = ({ src }: Props) => {
  const [open, toggle] = useReducer((state) => !state, false);

  return (
    <>
      <Stack onClick={toggle} sx={{ overflow: "hidden", width: 64, height: 40, borderRadius: 2, position: "relative" }}>
        <Image src={src} style={{ objectFit: "cover" }} alt="image" sizes="64px" quality={50} fill />
        <Box sx={{ backgroundColor: "grey.300", opacity: "0.4", width: 64, height: 40, position: "absolute" }} />
        <SvgIcon
          component={ZoomOutMapIcon}
          sx={{
            position: "absolute",
            color: "background.default",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          fontSize="medium"
        />
      </Stack>
      {open && (
        <Dialog
          onClose={toggle}
          open={open}
          title={
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Tooltip title="دانلود">
                <IconButton component={Link} href={src} download target="_blank">
                  <SvgIcon>
                    <DownloadIcon />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
              <Typography fontWeight="medium">پیش نمایش</Typography>
            </Stack>
          }
        >
          <Stack justifyContent="center" alignItems="center" position="relative" minHeight={500}>
            <Image src={src} alt="image" fill priority={false} style={{ objectFit: "contain" }} />
          </Stack>
        </Dialog>
      )}
    </>
  );
};
