"use client";

import { PaperProps } from "@mui/material";
import { forwardRef, PropsWithChildren } from "react";
import { BottomSheet } from "../bottom-sheet";
import { Dialog, type DialogProps } from "../dialog";

type ModalProps = {
  title?: string;
  open: boolean;
  onClose: () => void;
  DialogProps?: Omit<DialogProps, "open" | "onClose">;
  PaperProps?: PaperProps;
  closeButton?: boolean;
  Hidden: any;
};

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  (
    { onClose, open, children, title, PaperProps, closeButton, Hidden },
    ref,
  ) => {
    return (
      <>
        <Hidden for="mobile">
          <Dialog
            onClose={onClose}
            open={open}
            title={title}
            ref={ref}
            {...PaperProps}
            sx={{ zIndex: 3001 }}
          >
            {children}
          </Dialog>
        </Hidden>
        <Hidden for="desktop">
          <BottomSheet
            onClose={onClose}
            open={open}
            title={title}
            closeButton={closeButton}
            sx={{ zIndex: 3001 }}
          >
            {children}
          </BottomSheet>
        </Hidden>
      </>
    );
  },
);

Modal.displayName = "Modal";
