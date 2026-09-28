import Image from "next/image";

import { Reveal } from "@/components/motion";
import { images } from "@/data/site";
import { cn } from "@/lib";

type LogoBandProps = {
  image: string;
  imageAlt: string;
  /** The two bands size the logo differently on phones; kept as they are. */
  logoClassName: string;
  className?: string;
};

/**
 * The dark photographic band with the white logotype and a short red rule,
 * which closes both the services and the "why us" sections.
 */
export function LogoBand({ image, imageAlt, logoClassName, className }: LogoBandProps) {
  return (
    <Reveal className={cn("relative rounded-3xl overflow-hidden", className)}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          width={1184}
          height={864}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/85"></div>
      </div>
      <div className="relative z-10 p-8 md:p-12">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <Image
              src={images.logoWhite}
              alt="WVP Logo"
              width={1273}
              height={311}
              className={cn(
                "w-auto object-contain brightness-0 invert mx-auto mb-3",
                logoClassName,
              )}
            />
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
