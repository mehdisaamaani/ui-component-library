"use client";

import { SwipeableDrawer, SwipeableDrawerProps } from "@mui/material";
import noop from "lodash/noop";
import type { PropsWithChildren, ReactNode } from "react";
import { Box } from "../box";
import { DialogHeader } from "../dialog/DialogHeader";

export type BottomSheetProps = Omit<SwipeableDrawerProps, "open" | "onOpen" | "onClose"> & {
  title?: string;
  closeButton?: boolean;
  headerIcon?: ReactNode;
  open: boolean;
  hideTouchBar?: boolean;
  onOpen?: SwipeableDrawerProps["onOpen"];
  onClose: () => void;
};

export const BottomSheet = ({
  title,
  closeButton,
  headerIcon,
  children,
  onOpen,
  onClose,
  ModalProps,
  keepMounted,
  hideTouchBar,
  ...restProps
}: PropsWithChildren<BottomSheetProps>) => {
  return (
    <SwipeableDrawer
      disableSwipeToOpen
      anchor="bottom"
      ModalProps={{
        keepMounted: keepMounted ?? false,
        ...ModalProps,
      }}
      onClose={onClose}
      onOpen={onOpen || noop}
      {...restProps}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: 24,
          width: 1,
          ":after": {
            content: `''`,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            height: 3,
            width: 32,
            borderRadius: 1,
            bgcolor: "grey.100",
          },
        }}
      />
      {title && <DialogHeader closeButton={closeButton ? onClose : undefined}>{title}</DialogHeader>}
      <Box>{children}</Box>
    </SwipeableDrawer>
  );
};
