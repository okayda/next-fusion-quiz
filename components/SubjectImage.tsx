import Image from "next/image";

const languageImgs: Record<string, string> = {
  javascript: "/svgs/javascript.svg",
  typescript: "/svgs/typescript.svg",
  react: "/svgs/reactjs.svg",
};

export default function SubjectImage({
  subjectName,
  size,
}: {
  subjectName: string;
  size: number;
}) {
  return (
    <div className="rounded-sm border border-slate-200 bg-background p-1 dark:border-slate-800 dark:bg-slate-900">
      {subjectName === "next" ? (
        <>
          <Image
            src="/svgs/nextjs-light.svg"
            alt=""
            width={size}
            height={size}
            className="dark:hidden"
          />
          <Image
            src="/svgs/nextjs-dark.svg"
            alt=""
            width={size}
            height={size}
            className="hidden dark:block"
          />
        </>
      ) : (
        <Image
          src={languageImgs[subjectName]}
          alt=""
          width={size}
          height={size}
        />
      )}
    </div>
  );
}
