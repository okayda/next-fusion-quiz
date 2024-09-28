"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";

import FinishedPage from "./FinishedPage";
import SubjectImage from "@/components/SubjectImage";

import { answers } from "@/constants";
import { quiz } from "@/constants/quiz";

import { cn, shuffleArray, capitalize, Question } from "@/lib/utils";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button, buttonVariants } from "@/components/ui/button";
import { LogOut, BadgeCheck, CircleX } from "lucide-react";

const MyCodeBlock = dynamic(() => import("@/components/MyCodeBlock"), {
  ssr: false,
});

const optionLabels = ["a", "b", "c", "d"];

export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [questionsList, setQuestionsList] = useState<Question[]>([]);

  const searchParams = useSearchParams();

  const totalQuestions = parseInt(searchParams.get("questions") || "3");
  const difficultyLevel = searchParams.get("difficulty") || "Easy";
  const subjectName = searchParams.get("subject") || "javascript";

  const quizKey =
    `${subjectName}${difficultyLevel}${totalQuestions}` as keyof typeof quiz;

  // Shuffling the answers choices
  useEffect(() => {
    const initialQuestionsList = quiz[quizKey];

    const shuffledQuestionsList = initialQuestionsList.map((question) => ({
      ...question,
      choices: shuffleArray(question.choices),
    }));

    setQuestionsList(shuffledQuestionsList);
  }, [quizKey]);

  // Handle the case when the quiz is over
  if (currentQuestionIndex >= questionsList.length) {
    return (
      <FinishedPage
        subjectName={subjectName}
        difficultyLevel={difficultyLevel}
        correctAnswersCount={correctAnswersCount}
        questionsList={questionsList}
      />
    );
  }

  const currentQuestion = questionsList[currentQuestionIndex];

  const progressValue =
    ((currentQuestionIndex + (hasSubmittedAnswer ? 1 : 0)) / totalQuestions) *
    100;

  const handleAnswerSubmit = function () {
    if (selectedOption === currentQuestion.answer) {
      setCorrectAnswersCount((prev) => prev + 1);
    }

    setHasSubmittedAnswer(true);
  };

  const handleNextQuestion = function () {
    setCurrentQuestionIndex((prev) => prev + 1);
    setHasSubmittedAnswer(false);
    setSelectedOption("");
  };

  return (
    <div className="lg:flex lg:gap-14">
      <div className="lg:w-full lg:max-w-[560px]">
        {/* Exit quiz */}
        <div className="mb-6 flex items-center justify-between lg:mb-8">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "gap-2 border border-rose-800 text-[15px] font-semibold text-rose-800 dark:bg-slate-900",
            )}
          >
            Exit Quiz
            <LogOut width={16} height={16} />
          </Link>

          <SubjectImage subjectName={subjectName} size={30} />
        </div>

        {/* Question title & progress */}
        <div className="mb-4">
          <p className="text-sm md:text-base">
            <span className="font-semibold text-green-600">
              {capitalize(difficultyLevel)}
            </span>{" "}
            Question <strong>{currentQuestionIndex + 1}</strong> of{" "}
            <strong>{totalQuestions}</strong>
          </p>

          <Progress value={progressValue} />
        </div>

        {/* Tabs question & explanation */}
        <Tabs defaultValue="Question">
          <TabsList className="mb-6 grid min-h-[45px] w-full grid-cols-2 border font-bold text-foreground md:mb-8">
            {answers.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="Question">
            <p
              className={cn(
                "text-[15px] font-semibold leading-snug",
                currentQuestion.hasCodeSyntax
                  ? "mb-2.5 md:text-base"
                  : "mb-3 md:text-lg lg:mb-0",
              )}
            >
              {currentQuestion.question}
            </p>

            <Separator
              className={cn(
                "mb-6 border lg:hidden",
                currentQuestion.hasCodeSyntax ? "hidden" : "block",
              )}
            />

            {currentQuestion.hasCodeSyntax && (
              <div className="mb-6 text-xs md:mb-10 md:text-sm">
                <MyCodeBlock codeSyntax={currentQuestion.code} />
              </div>
            )}
          </TabsContent>

          <TabsContent value="Explanation">
            <p
              className={cn(
                "text-[15px] font-semibold leading-snug",
                currentQuestion.hasCodeSyntax
                  ? "mb-2.5 md:text-base"
                  : "mb-3 md:text-lg lg:mb-0",
              )}
            >
              {currentQuestion.explanation}
            </p>

            <Separator className="mb-6 border" />
          </TabsContent>
        </Tabs>
      </div>

      {/* Buttons choices & submit | finished */}
      <div className="lg:w-full">
        <RadioGroup.Root
          className="mb-6 flex flex-col space-y-3"
          value={selectedOption}
          onValueChange={setSelectedOption}
          disabled={hasSubmittedAnswer}
        >
          {currentQuestion.choices.map((choice: string, index: number) => {
            const isCorrectSelectedOption =
              hasSubmittedAnswer &&
              selectedOption === choice &&
              choice === currentQuestion.answer;

            const isWrongSelectedOption =
              hasSubmittedAnswer &&
              selectedOption === choice &&
              choice !== currentQuestion.answer;

            return (
              <div key={choice} className="flex items-center">
                <RadioGroup.Item
                  id={choice}
                  value={choice}
                  className="peer sr-only"
                />
                <label
                  htmlFor={choice}
                  className={cn(
                    "flex w-full cursor-pointer items-start gap-3 rounded-md border bg-background p-2.5 transition-colors peer-aria-checked:border-green-500 peer-aria-checked:bg-secondary dark:bg-slate-900",
                    hasSubmittedAnswer
                      ? choice === currentQuestion.answer
                        ? "border-green-500"
                        : selectedOption === choice
                          ? "peer-aria-checked:border-amber-500"
                          : "border-rose-500"
                      : "",
                  )}
                >
                  <div className="rounded-md border border-slate-200 bg-background px-3 py-1 font-medium dark:border-slate-700">
                    {isCorrectSelectedOption ? (
                      <span className="block px-0">
                        <BadgeCheck className="size-5 text-green-500" />
                      </span>
                    ) : isWrongSelectedOption ? (
                      <span className="block px-0">
                        <CircleX className="size-5 text-rose-500" />
                      </span>
                    ) : (
                      <span className="block">
                        {optionLabels[index].toUpperCase()}
                      </span>
                    )}
                  </div>
                  <span className="self-center text-sm font-medium">
                    {choice}
                  </span>
                </label>
              </div>
            );
          })}
        </RadioGroup.Root>

        <div className="flex flex-col gap-3.5">
          <Button
            type="button"
            className="h-[42px] w-full font-semibold"
            onClick={handleAnswerSubmit}
            disabled={!selectedOption || hasSubmittedAnswer}
          >
            {!hasSubmittedAnswer ? "Submit" : "Already validated"}
          </Button>

          {hasSubmittedAnswer && (
            <Button
              type="button"
              variant="secondary"
              onClick={handleNextQuestion}
              className="h-[42px] w-full gap-2 border border-green-700 bg-background font-semibold"
            >
              {currentQuestionIndex === totalQuestions - 1
                ? "Finished"
                : " Next Question"}

              <LogOut width={16} height={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
