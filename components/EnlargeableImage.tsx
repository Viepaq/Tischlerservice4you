"use client";

import { useState } from "react";
import Image from "next/image";

interface EnlargeableImageProps {
  src: string;
  alt: string;
  wrapperClassName: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

export default function EnlargeableImage({
  src,
  alt,
  wrapperClassName,
  imageClassName = "object-cover",
  sizes,
  priority = false,
}: EnlargeableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block ${wrapperClassName}`}
        aria-label={`${alt} vergrößern`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`${imageClassName} transition-transform duration-300 group-hover:scale-[1.02]`}
          sizes={sizes}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex min-h-[44px] items-center rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20"
            onClick={() => setOpen(false)}
          >
            Schließen
          </button>
          <div
            className="relative max-h-[90vh] max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1800}
              height={1200}
              className="h-auto max-h-[90vh] w-full rounded-xl object-contain"
              sizes="(max-width: 1024px) 100vw, 85vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
