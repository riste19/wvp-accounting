import Image from "next/image";

// Direct path, not the barrel: the header that renders this is a client component.
import { images, imageSizes } from "@/data/site/images";

type LogoProps = {
  /** ~127×27 in the header, 360px wide in the footer. */
  variant?: "header" | "footer";
  /** White for dark or photographic backgrounds. */
  tone?: "color" | "white";
  /** Leave empty when a surrounding link already names the logo. */
  alt?: string;
};

/**
 * The firm's logotype: the red WVP monogram beside the Macedonian wordmark
 * АКАУНТИНГ. It is the same lockup in every language, as it is on the site
 * the boss approved — there is no Latin "ACCOUNTING" version of the artwork.
 */
export function Logo({ variant = "header", tone = "color", alt = "" }: LogoProps) {
  const isFooter = variant === "footer";
  const white = tone === "white";

  return (
    <Image
      src={white ? images.logoWhite : images.logo}
      alt={alt}
      width={white ? imageSizes.logoWhite.width : imageSizes.logo.width}
      height={white ? imageSizes.logoWhite.height : imageSizes.logo.height}
      priority={!isFooter}
      className={isFooter ? "h-auto w-[360px] max-w-full" : "h-[28px] w-auto"}
    />
  );
}
