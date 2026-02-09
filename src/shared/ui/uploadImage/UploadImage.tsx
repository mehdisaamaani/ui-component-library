"use client";

import { convertUrlToFile } from "@/utils";
import { useEffect } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Stack } from "../stack";
import { Typography } from "../typography";
import { FileInputBox } from "./FileInputBox";
import { PreviewBox } from "./PreviewBox";
interface Props<TFormValues extends FieldValues> {
  title: string;
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  disabled?: boolean;
}

export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "application/pdf"];

const compressImage = (file: File, quality = 0.8): Promise<File> => {
  return new Promise((resolve) => {
    if (!file.type.startsWith("image/") || file.type === "image/webp") {
      resolve(file);
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      const maxWidth = 1920;
      const maxHeight = 1080;
      let { width, height } = img;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          } else {
            resolve(file);
          }
        },
        file.type,
        quality,
      );
    };

    img.src = URL.createObjectURL(file);
  });
};

export const UploadImage = <TFormValues extends FieldValues>({
  title,
  control,
  name,
  disabled,
}: Props<TFormValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const createUrlFile = async (file: File) => {
    if (!file) return;
    try {
      const compressedFile = await compressImage(file, 0.9);
      field.onChange(compressedFile);
    } catch {
      field.onChange(file);
    }
  };

  useEffect(() => {
    if (typeof field.value !== "string") return;
    convertUrlToFile(field.value, title).then((file) => {
      if (file) {
        field.onChange(file);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value]);

  const onClickTrash = () => {
    field.onChange(null);
  };

  return (
    <Stack gap={2} width={1} height={1}>
      {field.value ? (
        <PreviewBox title={title} onDelete={onClickTrash} value={field.value} disabled={disabled} />
      ) : (
        <FileInputBox title={title} onFile={createUrlFile} disabled={disabled} />
      )}
      {error?.message && (
        <Typography variant="xs" fontWeight="xBold" color="error" gap={1} display="flex" alignItems="center">
          {error.message}
        </Typography>
      )}
    </Stack>
  );
};
