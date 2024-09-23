import { ThemeSwitcherBtn } from "./ThemeSwitcherBtn";
import { Sparkles } from "lucide-react";

export default function Navigation() {
  return (
    <div className="border-b bg-background py-4">
      <div className="mx-auto max-w-7xl px-3 md:px-8">
        <div className="mx-auto flex max-w-[768px] items-center justify-between lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-2">
            <h2 className="font-jacques text-2xl text-green-500 md:text-3xl">
              AI Quiz
            </h2>
            <Sparkles
              width={35}
              height={35}
              strokeWidth={1.5}
              className="text-green-500"
            />
          </div>

          <ThemeSwitcherBtn />
        </div>
      </div>
    </div>
  );
}
