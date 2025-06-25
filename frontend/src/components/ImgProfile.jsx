import { Image } from "@heroui/react";

export default function HeroImg({ src, width }) {
  return (
    <Image
      isBlurred
      isZoomed
      alt="HeroUI Album Cover"
      radius="full"
      className="m-2 rounded-full object-cover hover:scale-105 transition-transform duration-200 hover:-rotate-3"
      src={
        src ||
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
      }
      width={width || 250}
      height={width || 250}
    />
  );
}
