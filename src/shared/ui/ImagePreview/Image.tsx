"use client";
import NextImage, { ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src"> & {
  src?: string;
};

export const Image = ({ src, ...props }: Props) => {
  const [errorImage, setErrorImage] = useState(false);

  if (!src) {
    return <NextImage src="/icons/icon-72x72.png" {...props} />;
  }

  return (
    <NextImage
      // TODO
      unoptimized
      src={errorImage ? "/icons/icon-72x72.png" : src}
      onError={() => setErrorImage(true)}
      {...props}
    />
  );
};
