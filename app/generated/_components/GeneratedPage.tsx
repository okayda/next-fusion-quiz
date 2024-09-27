"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";

import { cn } from "@/lib/utils";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { LogOut, BadgeCheck } from "lucide-react";

import { answers } from "@/constants";

const MyCodeBlock = dynamic(() => import("@/components/MyCodeBlock"), {
  ssr: false,
});

const letters = ["a", "b", "c", "d"];
let correctAnswer = 0;
let currQuestion = 0;

export default function GeneratedPage() {
  const [radioValue, setRadioValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const searchParams = useSearchParams();

  const questions = searchParams.get("questions") || "3";
  const difficulty = searchParams.get("difficulty") || "Easy";
  const subject = searchParams.get("subject") || "JavaScript";

  const handleSubmit = function () {};

  return (
    <div className="lg:flex lg:gap-14">
      <div className="lg:w-full lg:max-w-[560px]">
        <div className="mb-4 md:mb-6 lg:mb-8">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "gap-2 border border-rose-900 font-bold text-rose-700 dark:bg-slate-900",
            )}
          >
            Exit quiz
            <LogOut width={16} height={16} />
          </Link>
        </div>

        <div className="mb-4">
          <p className="mb-2">
            <span className="font-semibold text-green-600">
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>{" "}
            Question <strong>1</strong> of <strong>{questions}</strong>
          </p>

          <Progress value={50} />
        </div>

        <Tabs defaultValue="Question" className="mb-12 w-full">
          <TabsList className="grid min-h-[45px] w-full grid-cols-2 border font-bold text-foreground">
            {answers.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* <h2
          className={cn(
            "font-semibold",
            data[currQuestion].codeSyntaxIsAvailable
              ? "text-md mb-2"
              : "mb-4 text-lg",
          )}
        >
          {data[currQuestion].questionName}
        </h2> */}

        {/* <div
          className={cn(
            "mb-6 text-xs md:mb-10 md:text-sm",
            data[currQuestion].codeSyntaxIsAvailable ? "block" : "none",
          )}
        >
          <MyCodeBlock codeSyntax={data[currQuestion].codeSyntax} />
        </div> */}
      </div>

      {/* <div className="lg:w-full">
        <RadioGroup.Root
          className="mb-6 flex flex-col space-y-3"
          value={radioValue}
          onValueChange={setRadioValue}
        >
          {data[currQuestion].choices.map((choice: string, i: number) => (
            <div key={choice} className="flex items-center">
              <RadioGroup.Item
                id={choice}
                value={choice}
                className="peer sr-only"
              />
              <label
                htmlFor={choice}
                className={cn(
                  "flex w-full cursor-pointer items-start gap-4 rounded-md border bg-background px-2 py-2.5 transition-colors peer-aria-checked:border-green-500 peer-aria-checked:bg-secondary dark:bg-slate-900",
                )}
              >
                <div className="rounded-md border bg-background px-3 py-1 font-medium peer-aria-checked:bg-primary-foreground">
                  {letters[i].toUpperCase()}
                </div>
                <span className="self-center text-sm font-medium">
                  {choice}
                </span>
              </label>
            </div>
          ))}
        </RadioGroup.Root>

        <Button
          type="submit"
          className="w-full py-2.5 font-semibold"
          onClick={handleSubmit}
          disabled={!radioValue}
        >
          Submit
        </Button>
      </div> */}
    </div>
  );
}
