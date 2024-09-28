"use client";

import { useState } from "react";
import Link from "next/link";

import { questions, difficulty, subject } from "@/constants";

import SubjectImage from "@/components/SubjectImage";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomeContent() {
  const [selectedQuestions, setSelectedQuestions] = useState("3");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");

  const handleQuestionsChange = function (value: string) {
    setSelectedQuestions(value);
  };

  const handleDifficultyChange = function (value: string) {
    setSelectedDifficulty(value);
  };

  return (
    <>
      <div className="lg:max-w-[500px]">
        <h1 className="mb-10 text-4xl md:mb-16 lg:text-5xl lg:leading-tight">
          Welcome to the <span className="font-semibold">Fusion Quiz!</span>
        </h1>

        <div className="mb-6">
          <p className="mb-2">How many questions?</p>

          <Tabs
            defaultValue={selectedQuestions}
            className="w-full"
            onValueChange={handleQuestionsChange}
          >
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

          <Tabs
            defaultValue={selectedDifficulty}
            className="w-full"
            onValueChange={handleDifficultyChange}
          >
            <TabsList className="grid min-h-[45px] w-full grid-cols-3 border font-bold text-foreground">
              {difficulty.map((tab) => (
                <TabsTrigger key={tab.label} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="lg:flex-1">
        <p className="mb-3">Pick a subject to get started.</p>

        <ul className="flex flex-col gap-3">
          {subject.map(({ title, value }) => (
            <li key={title}>
              <Link
                href={{
                  pathname: "/generated",
                  query: {
                    subject: value,
                    questions: selectedQuestions,
                    difficulty: selectedDifficulty,
                  },
                }}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "flex h-auto w-full items-center justify-start gap-4 border p-2 text-lg font-semibold tracking-wide hover:border-green-500 dark:bg-slate-900 md:p-3 lg:px-4 lg:text-2xl",
                )}
              >
                <SubjectImage subjectName={value} size={30} />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
