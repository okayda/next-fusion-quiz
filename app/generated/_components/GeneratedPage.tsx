"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { CodeBlock, dracula } from "react-code-blocks";
import { LogOut } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { answers } from "@/constants";

const options = [
  {
    value: "a",
    label: "Error",
  },
  { value: "b", label: "1 2 3 4" },
  { value: "c", label: "2 4 6 8" },
  { value: "d", label: "undefined" },
];

export default function GeneratedPage() {
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();

  //   const subject = searchParams.get("subject");
  const questions = searchParams.get("questions");
  const difficulty = searchParams.get("difficulty") || "unknown";

  return (
    <div>
      <div className="mb-4">
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
      <Tabs defaultValue="question" className="mb-12 w-full">
        <TabsList className="grid min-h-[45px] w-full grid-cols-2 border font-bold text-foreground">
          {answers.map((tab) => (
            <TabsTrigger key={tab.label} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* if the question is not related to the coding */}
      {/* <h2 className="mb-4 text-lg font-semibold">What does HTML stand for?</h2> */}

      <h2 className="text-md mb-2 font-semibold">
        What will be the output of the following code?
      </h2>
      <div className="text-xs">
        <CodeBlock
          text={`const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(...doubled);`}
          language={"javascript"}
          theme={dracula}
        />
      </div>
      <Separator className="mb-6" />
      <div>
        <RadioGroup.Root
          className="mb-6 flex flex-col space-y-3"
          value={value}
          onValueChange={setValue}
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <RadioGroup.Item
                id={option.value}
                value={option.value}
                className="peer sr-only"
              />
              <label
                htmlFor={option.value}
                className="flex w-full cursor-pointer items-center gap-4 rounded-md border bg-background p-2 transition-colors peer-aria-checked:border-green-500 peer-aria-checked:bg-secondary dark:bg-slate-900"
              >
                <div className="rounded-md border bg-background px-3 py-1 font-medium peer-aria-checked:bg-primary-foreground">
                  {option.value.toUpperCase()}
                </div>
                <span className="text-sm font-medium">{option.label}</span>
              </label>
            </div>
          ))}
        </RadioGroup.Root>

        <Button
          type="submit"
          className="w-full tracking-wide"
          disabled={!value}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
