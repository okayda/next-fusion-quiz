import Image from "next/image";

export default function Background() {
  return (
    <>
      <div className="absolute left-0 top-0 -z-50 hidden size-full dark:block">
        <Image
          src="/svgs/background-desktop-dark.svg"
          alt="Desktop Background Dark"
          layout="fill"
          className="hidden lg:block"
          loading="lazy"
        />

        <Image
          src="/svgs/background-tablet-dark.svg"
          alt="Tablet Background Dark"
          layout="fill"
          className="hidden md:block lg:hidden"
        />

        <Image
          src="/svgs/background-mobile-dark.svg"
          alt="Mobile Background Dark"
          layout="fill"
          className="md:hidden"
          loading="lazy"
        />
      </div>

      <div className="absolute left-0 top-0 -z-50 size-full dark:hidden">
        <Image
          src="/svgs/background-desktop-light.svg"
          alt="Desktop Background Light"
          layout="fill"
          className="hidden lg:block"
          loading="lazy"
        />

        <Image
          src="/svgs/background-tablet-light.svg"
          alt="Tablet Background Light"
          layout="fill"
          className="hidden md:block lg:hidden"
          loading="lazy"
        />

        <Image
          src="/svgs/background-mobile-light.svg"
          alt="Mobile Background Light"
          layout="fill"
          className="md:hidden"
          loading="lazy"
        />
      </div>
    </>
  );
}
