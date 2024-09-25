import HomeContent from "./_components/HomeContent";

export default function Home() {
  return (
    <section>
      <div className="mx-auto mt-10 md:mt-14 md:max-w-[768px] lg:mx-0 lg:mt-32 lg:flex lg:max-w-none lg:items-center lg:gap-28">
        <HomeContent />
      </div>
    </section>
  );
}
