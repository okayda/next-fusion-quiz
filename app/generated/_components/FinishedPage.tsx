import { cn, capitalize, Question } from "@/lib/utils";
import Link from "next/link";

import { LogOut } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import SubjectImage from "../../../components/SubjectImage";

export default function FinishedPage({
  subjectName,
  difficultyLevel,
  correctAnswersCount,
  questionsList,
}: {
  subjectName: string;
  difficultyLevel: string;
  correctAnswersCount: number;
  questionsList: Question[];
}) {
  return (
    <div className="text-center">
      <div className="mb-3 inline-block">
        <SubjectImage subjectName={subjectName} size={80} />
      </div>

      <h2 className="text-2xl font-bold">
        <span className="font-semibold text-green-600">
          {capitalize(difficultyLevel)}
        </span>{" "}
        Quiz Completed
      </h2>
      <p className="mt-4 text-lg">
        Your score: <strong>{correctAnswersCount}</strong> out of{" "}
        <strong>{questionsList.length}</strong>
      </p>

      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "mt-6 gap-2 border border-rose-800 font-bold text-rose-800 dark:bg-slate-900",
        )}
      >
        Return Home
        <LogOut width={16} height={16} />
      </Link>
    </div>
  );
}
