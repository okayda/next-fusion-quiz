import { ThemeSwitcherBtn } from "./ThemeSwitcherBtn";
import { Sparkles } from "lucide-react";

export default function Navigation() {
  return (
    <div className="border-b bg-background py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 md:px-8">
        <div className="flex items-center gap-2">
          <h2 className="font-jacques text-3xl">AI Quiz</h2>
          <Sparkles width={35} height={35} strokeWidth={1.5} />
        </div>

        <ThemeSwitcherBtn />
      </div>
    </div>
  );
}
