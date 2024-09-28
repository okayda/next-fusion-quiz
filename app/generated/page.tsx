import { Suspense } from "react";
import GeneratedPage from "./_components/GeneratedPage";

export default function page() {
  return (
    <section>
      <div className="mx-auto md:max-w-[768px] lg:mx-0 lg:max-w-none">
        <Suspense>
          <GeneratedPage />
        </Suspense>
      </div>
    </section>
  );
}
