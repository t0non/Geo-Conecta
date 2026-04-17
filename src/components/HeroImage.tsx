"use client";

import Image from "next/image";
import { useState } from "react";

interface HeroImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  imageHint: string;
}

export function HeroImage({ src, fallbackSrc, alt, imageHint }: HeroImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover animate-slow-pan"
      priority
      data-ai-hint={imageHint}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
