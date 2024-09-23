import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { questions, difficulty, subject } from "@/constants";

export default function Home() {
  return (
    <section>
      <div className="mx-auto md:max-w-[768px]">
        <h1 className="my-10 text-4xl md:mb-16 md:mt-14">
          Welcome to the <span className="font-semibold">Gemini AI Quiz!</span>
        </h1>

        <div className="mb-6">
          <p className="mb-2">How many questions?</p>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid min-h-[45px] w-full grid-cols-3 border font-bold text-foreground">
              {questions.map((tab) => (
                <TabsTrigger key={tab.label} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mb-16">
          <p className="mb-2">Difficulty level?</p>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid min-h-[45px] w-full grid-cols-3 border font-bold text-foreground">
              {difficulty.map((tab) => (
                <TabsTrigger key={tab.label} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <p className="mb-3">Pick a subject to get started.</p>

        <ul className="flex flex-col gap-3">
          {subject.map(({ title, img }) => (
            <li key={title}>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "flex h-auto w-full items-center justify-start gap-4 border p-2 text-lg font-bold tracking-wide hover:border-green-500 dark:bg-slate-900",
                )}
              >
                <div className="rounded-sm bg-background p-1 dark:bg-slate-800">
                  {title === "Next.js" ? (
                    <>
                      <Image
                        src="/svgs/nextjs-light.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="z-20 dark:hidden"
                      />
                      <Image
                        src="/svgs/nextjs-dark.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="z-20 hidden dark:block"
                      />
                    </>
                  ) : (
                    <Image
                      src={img}
                      alt=""
                      width={30}
                      height={30}
                      className="z-20"
                    />
                  )}
                </div>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
