import { Suspense } from "react";
import GeneratedPage from "./_components/GeneratedPage";

export default function page() {
  return (
    <section>
      <div className="mx-auto mt-10 md:mt-14 md:max-w-[768px] lg:mx-0 lg:mt-32 lg:max-w-none">
        <Suspense>
          <GeneratedPage />
        </Suspense>
      </div>
    </section>
  );
}
