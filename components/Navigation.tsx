import { ThemeSwitcherBtn } from "./ThemeSwitcherBtn";
import { Biohazard } from "lucide-react";

export default function Navigation() {
  return (
    <div className="border-b bg-background py-4">
      <div className="mx-auto max-w-7xl px-3 md:px-8">
        <div className="mx-auto flex max-w-[768px] items-center justify-between lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-2">
            <h2 className="font-jacques text-2xl text-green-500 md:text-3xl">
              Fusion
            </h2>
            <Biohazard
              width={35}
              height={35}
              strokeWidth={1.3}
              className="text-green-500"
            />
          </div>

          <ThemeSwitcherBtn />
        </div>
      </div>
    </div>
  );
}
